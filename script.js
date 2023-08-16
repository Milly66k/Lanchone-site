

// Função para exibir a seção correspondente ao link clicado
function showSection(sectionId) {
    document.querySelectorAll('section').forEach(function(section) {
      if (section.id === sectionId) {
        section.style.display = 'block';
      } else {
        section.style.display = 'none';
      }
    });
  }
  
  // Adicionar eventos aos links do menu
  document.querySelectorAll('nav a').forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      let targetId = this.getAttribute('href').substring(1);
      showSection(targetId);
    });
  });
  


  // Mostrar a seção inicial (home) ao carregar a página
  showSection('hamburgers');


  //Carrinho de compras

  

  // Definir uma variável para armazenar os itens do carrinho
let cartItems = [];

// Função para adicionar um item ao carrinho
function addToCart(itemName, itemPrice) {
  cartItems.push({ name: itemName, price: itemPrice });
  updateCart();
}

// Função para remover um item do carrinho
function removeFromCart(index) {
  cartItems.splice(index, 1);
  updateCart();
}

// Função para atualizar o carrinho no HTML
function updateCart() {
  const cartElement = document.querySelector('.cart-items');
  const cartTotalElement = document.getElementById('cart-total');
  cartElement.innerHTML = '';
  let total = 0;

  cartItems.forEach((item, index) => {
    const itemElement = document.createElement('div');
    itemElement.innerHTML = `${item.name} - R$ ${item.price.toFixed(2)} <button onclick="removeFromCart(${index})">Remover</button>`;
    cartElement.appendChild(itemElement);
    total += item.price;
  });

  cartTotalElement.textContent = `R$ ${total.toFixed(2)}`;
}

// Função para limpar o carrinho
function clearCart() {
  cartItems = [];
  updateCart();
}

// Evento para limpar o carrinho ao clicar no botão "Limpar Carrinho"
document.getElementById('clear-cart').addEventListener('click', clearCart);

// Chame a função updateCart() para exibir o carrinho inicialmente vazio
updateCart();
