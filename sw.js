const CACHE_NAME = "lumina-v6-0-5";
const APP_SHELL = [
  "./", "./index.html", "./manifest.json", "./css/style.css",
  "./js/config.js", "./js/products.js", "./js/state.js", "./js/app.js",
  "./icon-192-v6-0-5.png", "./icon-512-v6-0-5.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => {
      const hadPreviousLuminaVersion = keys.some(key => key.indexOf("lumina-") === 0 && key !== CACHE_NAME);
      return Promise.all(
        keys.filter(key => key.indexOf("lumina-") === 0 && key !== CACHE_NAME)
          .map(key => caches.delete(key))
      ).then(() => hadPreviousLuminaVersion);
    }).then(hadPreviousLuminaVersion => {
      return self.clients.claim().then(() => {
        if (hadPreviousLuminaVersion && self.registration && self.registration.showNotification) {
          return self.registration.showNotification("✨ LUMINA foi atualizada!", {
            body: "Uma nova versão da loja está disponível. Confira as novidades.",
            icon: "./icon-192-v6-0-5.png",
            badge: "./icon-192-v6-0-5.png",
            tag: "lumina-update-sw-v6-0-5",
            renotify: true,
            data: { url: "./" }
          }).catch(() => {});
        }
      });
    })
  );
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  // HTML/JS/CSS/manifest precisam buscar a versão publicada; imagens remotas continuam normais.
  if (url.origin === self.location.origin) {
    event.respondWith(fetch(event.request).then(response => {
      if (response && response.ok) {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy)).catch(() => {});
      }
      return response;
    }).catch(() => caches.match(event.request)));
    return;
  }
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});

self.addEventListener("notificationclick", event => {
  event.notification.close();
  event.waitUntil(
    self.clients.matchAll({ type: "window", includeUncontrolled: true }).then(clientList => {
      for (const client of clientList) {
        if ("focus" in client) return client.focus();
      }
      if (self.clients.openWindow) return self.clients.openWindow("./");
    })
  );
});
