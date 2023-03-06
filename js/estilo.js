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
