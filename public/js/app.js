const hamburguer = document.getElementById('hamburguer');
const hamburguer_list = document.getElementById('hamburguer_list');

hamburguer.addEventListener('click', () => {
    hamburguer_list.classList.toggle('nav__list--open');
});
