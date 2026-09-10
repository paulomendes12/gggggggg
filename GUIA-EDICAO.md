# LUMINA — Guia rápido de edição

## Estrutura

- `index.html` — estrutura das telas, modais e componentes.
- `css/style.css` — todo o visual atual.
- `js/products.js` — **catálogo de produtos**. É o arquivo principal para adicionar, remover ou editar produtos e suas variações.
- `js/state.js` — estado compartilhado entre abas/janelas (sacola, favoritos e usuário).
- `js/app.js` — funções e comportamento da aplicação.
- `manifest.json` — configuração do aplicativo/PWA.
- `sw.js` — Service Worker e cache do aplicativo.

## Adicionar um produto sem variações

```js
{
  id: 5,
  title: "Bolsa Minimalista",
  category: "Bolsas",
  priceNumber: 199.90,
  images: [
    "URL-DA-IMAGEM"
  ],
  description: "Descrição do produto.",
  variations: {}
}
```

## Produto com tamanho

```js
{
  id: 6,
  title: "Camiseta Premium",
  category: "Camisas",
  priceNumber: 99.90,
  images: ["URL-DA-IMAGEM"],
  description: "Camiseta de algodão.",
  variations: {
    "Tamanho": ["P", "M", "G", "GG"]
  }
}
```

## Produto com tamanho e cor

```js
{
  id: 7,
  title: "Vestido Elegance",
  category: "Vestidos",
  priceNumber: 159.90,
  images: [
    "URL-DA-IMAGEM-1",
    "URL-DA-IMAGEM-2"
  ],
  description: "Vestido elegante e confortável.",
  variations: {
    "Tamanho": ["P", "M", "G"],
    "Cor": ["Preto", "Vermelho", "Azul"]
  }
}
```

O cliente verá cada grupo de opções na tela do produto e deverá escolher uma opção de cada grupo antes de adicionar à sacola.

## Preço diferente por variação

O preço base fica em `priceNumber`. Se algumas combinações tiverem outro preço, use `variantPrices`.

```js
{
  id: 8,
  title: "Tênis LUMINA",
  category: "Calçados",
  priceNumber: 299.90,
  images: ["URL-DA-IMAGEM"],
  description: "Tênis casual.",
  variations: {
    "Tamanho": ["38", "39", "40", "41"],
    "Cor": ["Preto", "Branco"]
  },
  variantPrices: {
    "Cor=Branco|Tamanho=40": 319.90,
    "Cor=Preto|Tamanho=41": 329.90
  }
}
```

A chave deve seguir o formato `Nome=Valor`, separando os grupos com `|`. A aplicação organiza os nomes automaticamente, então a ordem dos grupos no objeto não importa.

## O que vai para a sacola

A sacola registra a combinação escolhida. Por exemplo:

`Tamanho: M • Cor: Preto`

Assim, o mesmo produto pode aparecer mais de uma vez na sacola quando o cliente escolher variações diferentes. Se a mesma combinação for adicionada novamente, a quantidade daquele item aumenta.

A estrutura também mantém compatibilidade com produtos antigos que usavam somente `size`.

## Sincronização entre abas

A LUMINA mantém sacola, favoritos e usuário no `localStorage` e usa `BroadcastChannel` quando disponível. Quando uma ação é feita em uma aba, as outras abas abertas no mesmo navegador recebem a alteração e atualizam a interface.

## Regra para futuras alterações

Para adicionar ou editar produtos e variações, prefira mexer somente em `js/products.js`.
Para mudar aparência, use `css/style.css`.
Para mudar comportamento, use `js/app.js`.
Evite colocar novas regras diretamente no `index.html`.
