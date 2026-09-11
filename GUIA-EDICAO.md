# LUMINA V5 — Guia rápido de edição

## 1. Adicionar produto

Edite somente `js/products.js`.

Modelo simples:

```js
{
  id: 5,
  title: "Bolsa Minimalista",
  category: "Bolsas",
  status: "disponivel",
  priceNumber: 199.90,
  images: [
    "https://endereco-da-imagem.jpg"
  ],
  description: "Descrição do produto.",
  variations: {}
}
```

### Produto vendido ou sem estoque

Use:

```js
status: "vendido"
```

ou:

```js
status: "sem-estoque"
```

Quando um desses status estiver ativo:
- o preço não aparece no card;
- aparece `Vendido` ou `Sem estoque`;
- o botão da sacola fica bloqueado;
- o cliente não consegue adicionar o item ao carrinho.

Para voltar a vender, troque para:

```js
status: "disponivel"
```

### Atenção ao cadastrar

- Cada produto precisa de um `id` diferente.
- `priceNumber` é número: `419.90`, sem `R$`.
- `images` precisa ser uma lista, mesmo com uma imagem.
- Separe os produtos com vírgula.
- Não apague a vírgula entre produtos.
- Não coloque duas propriedades com o mesmo nome.
- Uma URL de imagem deve estar entre aspas.

## 2. Sem variações

```js
variations: {}
```

## 3. Com tamanho

```js
variations: {
  "Tamanho": ["P", "M", "G", "GG"]
}
```

## 4. Com tamanho e cor

```js
variations: {
  "Tamanho": ["P", "M", "G"],
  "Cor": ["Preto", "Vermelho", "Azul"]
}
```

## 5. Preço diferente por variação

```js
variantPrices: {
  "Cor=Branco|Tamanho=40": 319.90
}
```

A aplicação organiza os nomes automaticamente.

## 6. Atualizações sem cadastro

A LUMINA agora identifica uma nova versão pelo valor:

```js
const LUMINA_SITE_VERSION = "5.0.0";
```

Sempre que publicar uma atualização importante, aumente esse número, por exemplo:

```js
const LUMINA_SITE_VERSION = "5.0.1";
```

Na próxima entrada do cliente, aparece um aviso animado de novidade.

Se o cliente já tiver autorizado notificações no navegador/celular, a LUMINA também pode mostrar a novidade como uma notificação do dispositivo.

**Importante:** sem um servidor de push, a notificação do celular depende do cliente ter aberto/visitado a LUMINA e concedido permissão. Para avisos mesmo com o site totalmente fechado, será necessário adicionar um serviço de Push/servidor.

## 7. Redes sociais

Os links das redes sociais ficam centralizados em `js/config.js`.

Edite somente os três endereços: `instagram`, `tiktok` e `pinterest`.
Exemplo:

```js
const LUMINA_SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/sua-loja/",
  tiktok: "https://www.tiktok.com/@sua-loja",
  pinterest: "https://www.pinterest.com/sua-loja/"
};
```

O mesmo endereço é usado nos links do **Perfil** e do **rodapé**. Ao clicar, a rede social é aberta em uma nova aba/janela.

## 8. Cadastro/login

O cadastro deixou de ser obrigatório. O cliente pode navegar, favoritar e comprar sem criar usuário.

A sacola e os favoritos continuam sendo salvos localmente no dispositivo.

## 9. Navegação inferior

A barra `Sacola / Categorias / Perfil / Favoritos / Instalar` aparece em telas pequenas e também no PC, mantendo as mesmas ações e o mesmo estilo. O rodapé continua abaixo do conteúdo.

## Estrutura

- `index.html` — estrutura das telas.
- `css/style.css` — aparência.
- `js/config.js` — links das redes sociais.
- `js/products.js` — catálogo.
- `js/state.js` — sacola/favoritos.
- `js/app.js` — comportamento e notificações.
- `manifest.json` — PWA.
- `sw.js` — cache.
