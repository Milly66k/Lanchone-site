// Função para obter o carrinho do localStorage
function getCart() {
  return JSON.parse(localStorage.getItem('cart')) || [];
}

// Função para salvar o carrinho no localStorage
function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Função para adicionar um item ao carrinho de compras
function addToCart(itemName, itemPrice) {
  const cart = getCart();
  const existingItemIndex = cart.findIndex(item => item.name === itemName);
  
  if (existingItemIndex !== -1) {
      cart[existingItemIndex].quantity += 1;
  } else {
      cart.push({ name: itemName, price: itemPrice, quantity: 1 });
  }

  saveCart(cart);
  alert(`${itemName} adicionado ao carrinho!`);
  updateCartDisplay();
}

// Função para remover um item do carrinho
function removeFromCart(index) {
  const cart = getCart();
  cart.splice(index, 1);
  saveCart(cart);
  updateCartDisplay();
}

// Função para atualizar a exibição do carrinho
function updateCartDisplay() {
  const cart = getCart();
  const cartItemsContainer = document.querySelector('.cart-items');
  const cartTotal = document.getElementById('cart-total');

  cartItemsContainer.innerHTML = '';
  let total = 0;

  cart.forEach((item, index) => {
      const itemElement = document.createElement('div');
      itemElement.classList.add('cart-item');
      itemElement.innerHTML = `
          <span>${item.name} - R$ ${item.price.toFixed(2)} x ${item.quantity}</span>
          <button class="remove-item" onclick="removeFromCart(${index})"><i class="fas fa-times"></i></button>
      `;
      cartItemsContainer.appendChild(itemElement);
      total += item.price * item.quantity;
  });

  cartTotal.textContent = `R$ ${total.toFixed(2)}`;
}

// Função para limpar o carrinho
document.getElementById('clear-cart').addEventListener('click', () => {
  localStorage.removeItem('cart');
  updateCartDisplay();
});

// Atualizar a exibição do carrinho ao carregar a página
window.onload = updateCartDisplay;
