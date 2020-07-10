const hamburguer = () => {
    const hamburguer = document.getElementById('hamburguer');
    const bar = document.getElementById('bar');
    const hamburguer_list = document.getElementById('hamburguer_list');

    const menu_list_links = Array.from(document.querySelectorAll('.menu-list__link'));

    hamburguer.addEventListener('click', () => {
        bar.classList.toggle('hamburguer__bar--open')
        hamburguer_list.classList.toggle('menu-list--open');
    });

    menu_list_links.map(l=>l.addEventListener('click', () => {
        bar.classList.toggle('hamburguer__bar--open')
        hamburguer_list.classList.toggle('menu-list--open');    
    }));
}

const scrollAppear = () => {
    // Crear la variable
    const introText = document.querySelector('.intro-text');
    const list = document.querySelector('.list');
    // Para saber la posicion del elemento
    const introPosition = introText.getBoundingClientRect().top;
    // Para los distintos tipos de pantallas
    const screenPosition = window.innerHeight;

    if(introPosition < screenPosition){
        introText.classList.add('intro-text--appears');
        list.classList.add('list--appears');
    }
}

scrollAppear();
hamburguer();



