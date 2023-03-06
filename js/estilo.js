    //avaliação inicio

const estrelas = document.querySelectorAll('.estrela');

estrelas.forEach(estrela => {
  estrela.addEventListener('click', () => {
    const valor = estrela.getAttribute('data-valor');
    estrelas.forEach(e => {
      if (e.getAttribute('data-valor') <= valor) {
        e.classList.add('selecionada');
      } else {
        e.classList.remove('selecionada');
      }
    });
  });
});

    //avaliação final//

  // favorito inicio\\

var favoriteBtn = document.getElementById('favorite-btn');
var favoriteIcon = document.getElementById('favorite-icon');

favoriteBtn.addEventListener('click', function() {
  if (favoriteIcon.classList.contains('fa-heart-o')) {
    favoriteIcon.classList.remove('fa-heart-o');
    favoriteIcon.classList.add('fa-heart');
    favoriteIcon.style.color = '#ff0000';
    favoriteBtn.innerHTML = 'Favorito ✓';
  } else {
    favoriteIcon.classList.remove('fa-heart');
    favoriteIcon.classList.add('fa-heart-o');
    favoriteIcon.style.color = '';
    favoriteBtn.innerHTML = 'Favorito';
  }
});
    //favorito final\\
   
    function adicionarAoCarrinho() {
			// Adiciona o item ao carrinho de compras
			alert("Produto adicionado ao carrinho!");}