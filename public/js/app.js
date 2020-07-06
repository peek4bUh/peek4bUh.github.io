const hamburguer = () => {
    const hamburguer = document.getElementById('hamburguer');
    const bar = document.getElementById('bar');
    const hamburguer_list = document.getElementById('hamburguer_list');

    hamburguer.addEventListener('click', () => {
        bar.classList.toggle('hamburguer__bar--open')
        hamburguer_list.classList.toggle('nav__list--open');
    });
}

hamburguer();
