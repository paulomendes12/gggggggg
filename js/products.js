/* =========================================================
   LUMINA — CATÁLOGO DE PRODUTOS — V5

   PARA ADICIONAR UM PRODUTO:
   1. Copie um objeto completo abaixo.
   2. Dê a ele um ID ÚNICO (nunca repita o ID).
   3. Preencha title, category, priceNumber e images.
   4. Use status: "disponivel", "sem-estoque" ou "vendido".
   5. Separe cada produto com vírgula.
   6. Não coloque vírgula depois do último produto.

   IMPORTANTE:
   - priceNumber deve ser número: 419.90 (não "R$ 419,90").
   - images deve ser uma lista: ["https://..."]
   - Se o produto estiver "sem-estoque" ou "vendido",
     o preço deixa de ser exibido e o carrinho é bloqueado.
   ========================================================= */

const products = [
  {
    id: 1,
    title: "Jaqueta Oversized Heavy Denim Preto Lavado",
    category: "Jaquetas",
    status: "disponivel", // disponivel | sem-estoque | vendido
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
    status: "disponivel", // disponivel | sem-estoque | vendido
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
    status: "disponivel", // disponivel | sem-estoque | vendido
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
    status: "disponivel", // disponivel | sem-estoque | vendido
    priceNumber: 419.90,
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Bolsa em couro ecológico de alta durabilidade.",
    variations: {}
  }
];
