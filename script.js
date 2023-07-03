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
      var targetId = this.getAttribute('href').substring(1);
      showSection(targetId);
    });
  });
  
  // Mostrar a seção inicial (home) ao carregar a página
  showSection('home');
  