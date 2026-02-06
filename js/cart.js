// Gerenciamento do Carrinho
let cart = JSON.parse(localStorage.getItem("cart")) || [];
const WHATSAPP_NUMBER = "34984315785";

// Atualizar contagem do carrinho
function updateCartCount() {
  const count = cart.reduce((total, item) => total + item.quantity, 0);
  document.getElementById("cartCount").innerText = count;
}

// Adicionar ao carrinho
function addToCart(id, name, price) {
  const existingItem = cart.find(item => item.id === id);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ id, name, price, quantity: 1 });
  }
  
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  renderCart();
  
  // Abrir carrinho automaticamente
  openCart();
  
  // Feedback visual
  showNotification(`${name} adicionado ao carrinho!`);
}

// Toggle do carrinho
function toggleCart() {
  const modal = document.getElementById("cartModal");
  const overlay = document.getElementById("cartOverlay");
  
  modal.classList.toggle("show");
  overlay.classList.toggle("hidden");
  renderCart();
}

function openCart() {
  const modal = document.getElementById("cartModal");
  const overlay = document.getElementById("cartOverlay");
  
  modal.classList.add("show");
  overlay.classList.remove("hidden");
  renderCart();
}

// Renderizar carrinho
function renderCart() {
  const itemsContainer = document.getElementById("cartItems");
  const emptyCart = document.getElementById("emptyCart");
  const checkoutBtn = document.getElementById("checkoutBtn");
  let total = 0;
  
  itemsContainer.innerHTML = "";
  
  if (cart.length === 0) {
    emptyCart.classList.remove("hidden");
    checkoutBtn.classList.add("hidden");
    document.getElementById("total").innerText = "0.00";
    return;
  }
  
  emptyCart.classList.add("hidden");
  checkoutBtn.classList.remove("hidden");
  
  cart.forEach(item => {
    total += item.price * item.quantity;
    const itemTotal = (item.price * item.quantity).toFixed(2);
    
    itemsContainer.innerHTML += `
      <div class="cart-item">
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-price">R$ ${item.price.toFixed(2)}</div>
          <div style="color: #6b7280; font-size: 0.875rem;">Subtotal: R$ ${itemTotal}</div>
        </div>
        <div class="quantity-control">
          <button onclick="decreaseQuantity(${item.id})">−</button>
          <span>${item.quantity}</span>
          <button onclick="increaseQuantity(${item.id})">+</button>
        </div>
        <button onclick="removeFromCart(${item.id})" class="btn-remove">Remover</button>
      </div>
    `;
  });
  
document.getElementById("total").innerText = total.toFixed(2);
}

// Aumentar quantidade
function increaseQuantity(id) {
  const item = cart.find(item => item.id === id);
  if (item) {
    item.quantity += 1;
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    renderCart();
  }
}

// Diminuir quantidade
function decreaseQuantity(id) {
  const item = cart.find(item => item.id === id);
  if (item && item.quantity > 1) {
    item.quantity -= 1;
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    renderCart();
  }
}

// Remover do carrinho
function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  renderCart();
}

// Checkout via WhatsApp
function checkout() {
  if (cart.length === 0) {
    alert("Seu carrinho está vazio!");
    return;
  }
  
  let message = "🛍️ *NOVO PEDIDO - JUMA STORE* 🛍️\n\n";
  message += "📋 *Itens do Pedido:*\n";
  
  let total = 0;
  cart.forEach(item => {
    const subtotal = item.price * item.quantity;
    total += subtotal;
    message += `✨ ${item.name}\n`;
    message += `   • Quantidade: ${item.quantity}x\n`;
    message += `   • Preço unitário: R$ ${item.price.toFixed(2)}\n`;
    message += `   • Subtotal: R$ ${subtotal.toFixed(2)}\n\n`;
  });
  
  message += "━━━━━━━━━━━━━━━━━━━━\n";
  message += `💰 *TOTAL: R$ ${total.toFixed(2)}*\n`;
  message += "━━━━━━━━━━━━━━━━━━━━\n\n";
  message += "👤 Por favor, me confirme:\n";
  message += "• Seu nome completo\n";
  message += "• Seu endereço de entrega\n";
  message += "• Seu telefone para contato\n";
  
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  
  window.open(whatsappUrl, "_blank");
  
  // Limpar carrinho após envio
  setTimeout(() => {
    cart = [];
    localStorage.removeItem("cart");
    updateCartCount();
    toggleCart();
    showNotification("Pedido enviado! Aguarde nossa confirmação no WhatsApp 😊");
  }, 500);
}

// Notificação
function showNotification(message) {
  const notification = document.createElement("div");
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: #10b981;
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 0.75rem;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    animation: slideIn 0.3s ease;
  `;
  notification.innerText = message;
  document.body.appendChild(notification);
  
  setTimeout(() => notification.remove(), 3000);
}

// Adicionar animação CSS
const style = document.createElement("style");
style.innerText = `
  @keyframes slideIn {
    from {
      transform: translateX(400px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;
document.head.appendChild(style);

// Inicializar
document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();
  renderCart();
});