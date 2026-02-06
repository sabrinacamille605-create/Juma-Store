// Base de dados de produtos
const products = [
  {
    id: 1,
    name: "Flor de Juma",
    description: "Notas florais suaves e delicadas",
    price: 189.90,
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&h=300&fit=crop",
    rating: 4.8,
    reviews: 45
  },
  {
    id: 2,
    name: "Noite Dourada",
    description: "Elegante, marcante e sofisticado",
    price: 219.90,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=300&fit=crop",
    rating: 4.9,
    reviews: 62
  },
  {
    id: 3,
    name: "Brisa Doce",
    description: "Refrescante com notas cítricas",
    price: 169.90,
    image: "https://images.unsplash.com/photo-1585386959984-a41552231693?w=400&h=300&fit=crop",
    rating: 4.7,
    reviews: 38
  },
  {
    id: 4,
    name: "Essência Mistério",
    description: "Misterioso com base amadeirada",
    price: 239.90,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=300&fit=crop",
    rating: 4.9,
    reviews: 51
  },
  {
    id: 5,
    name: "Pérola Cristalina",
    description: "Fresco e elegante para o dia",
    price: 179.90,
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=400&h=300&fit=crop",
    rating: 4.6,
    reviews: 29
  },
  {
    id: 6,
    name: "Luxo Absoluto",
    description: "Premium com notas florais nobres",
    price: 279.90,
    image: "https://images.unsplash.com/photo-1624936267765-d99e2b231184?w=400&h=300&fit=crop",
    rating: 5.0,
    reviews: 87
  }
];

// Renderizar produtos
function renderProducts() {
  const grid = document.getElementById("productGrid");
  grid.innerHTML = products.map(product => `
    <div class="product-card">
      <img src="${product.image}" alt="${product.name}" class="product-image" onerror="this.src='https://via.placeholder.com/400x300?text=${encodeURIComponent(product.name)}'">
      <div class="product-content">
        <h4 class="product-title">${product.name}</h4>
        <p class="product-description">${product.description}</p>
        <div class="product-rating">⭐ ${product.rating} (${product.reviews} avaliações)</div>
        <span class="product-price">R$ ${product.price.toFixed(2)}</span>
        <button onclick="addToCart(${product.id}, '${product.name}', ${product.price})" class="btn-add">
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  `).join("");
}

// Inicializar
document.addEventListener("DOMContentLoaded", renderProducts);