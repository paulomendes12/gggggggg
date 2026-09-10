/* =========================================================
   LUMINA — CATÁLOGO DE PRODUTOS
   =========================================================
   COMO CADASTRAR UM PRODUTO

   Produto sem variações:
   variations: {}

   Produto com uma variação:
   variations: {
     "Tamanho": ["P", "M", "G", "GG"]
   }

   Produto com várias variações:
   variations: {
     "Tamanho": ["P", "M", "G"],
     "Cor": ["Preto", "Branco", "Azul"]
   }

   Para preço diferente por combinação, use variantPrices:
   variantPrices: {
     "Tamanho=M|Cor=Preto": 179.90
   }

   Se variantPrices não existir, todos usam priceNumber.
   ========================================================= */

const products = [
  {
    id: 1,
    title: "Jaqueta Oversized Heavy Denim Preto Lavado",
    category: "Jaquetas",
    priceNumber: 349.90,
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Jaqueta produzida em sarja pesada 100% algodão com modelagem oversized.",
    variations: {
      "Tamanho": ["P", "M", "G", "GG"]
    }
  },
  {
    id: 2,
    title: "Óculos de Sol Matte Black Polarizado UV400",
    category: "Acessórios",
    priceNumber: 189.00,
    images: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Armação em acetato fosco com lentes polarizadas.",
    variations: {}
  },
  {
    id: 3,
    title: "Camisa de Linho Off-White Manga Longa",
    category: "Camisas",
    priceNumber: 229.90,
    images: [
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Camisa confeccionada em mistura de linho e algodão respirável.",
    variations: {
      "Tamanho": ["P", "M", "G", "GG"]
    }
  },
  {
    id: 4,
    title: "Bolsa Minimalista Leather Structured",
    category: "Bolsas",
    priceNumber: 419.90,
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Bolsa em couro ecológico de alta durabilidade.",
    variations: {}
   },
  {
    id: 5,
    title: "Iphone 13",
    category: "Bolsas",
    priceNumber: VENDIDO,
    images: [
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS7vx6RQnvVjiaqWUfJFR_zTZJbxVttcezlM6Khw40JuABt3BfsLbIwFEUue2BPjkVOY_4Ox2BM0BjgTRH9iE0Mbpc7NxuwRbg0egxBE10WS4SSElL5cdih"
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcROLCe21YwyNF-T0ucSvjmiPlGy9yIT-3CbVTw7qvpCN1KIHSNHIM6F_Z3fws-L19fYz1KsQh28HK6KxGEizDLKiHKqpKQ_Ig"
    ],
    description: "IHONE DE ETESTE, verificando se o site está funcionando",
    variations: {}
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
];
