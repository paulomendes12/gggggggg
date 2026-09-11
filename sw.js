const CACHE_NAME = "lumina-v5-0-1";
const APP_SHELL = ["./", "./index.html", "./manifest.json", "./css/style.css", "./js/products.js", "./js/state.js", "./js/app.js", "./icon-192.png", "./icon-512.png"];

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
      const hadPreviousLuminaVersion = keys.some(key =>
        key.indexOf("lumina-") === 0 && key !== CACHE_NAME
      );
      return Promise.all(
        keys.filter(key => key.indexOf("lumina-") === 0 && key !== CACHE_NAME)
          .map(key => caches.delete(key))
      ).then(() => hadPreviousLuminaVersion);
    }).then(hadPreviousLuminaVersion => {
      return self.clients.claim().then(() => {
        // Quando uma versão anterior já estava instalada, o próprio Service Worker
        // avisa o usuário na área de notificações do dispositivo, desde que ele
        // já tenha concedido permissão às notificações do site.
        if (hadPreviousLuminaVersion && self.registration && self.registration.showNotification) {
          return self.registration.showNotification("✨ LUMINA foi atualizada!", {
            body: "Uma nova versão da loja está disponível. Confira as novidades.",
            icon: "./icon-192.png",
            badge: "./icon-192.png",
            tag: "lumina-update-sw",
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
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
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
