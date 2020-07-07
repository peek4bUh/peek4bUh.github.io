const hamburguer = () => {
    const hamburguer = document.getElementById('hamburguer');
    const bar = document.getElementById('bar');
    const hamburguer_list = document.getElementById('hamburguer_list');

    const nav_home = document.getElementById('nav_home');
    const nav_about = document.getElementById('nav_about');
    const nav_skills = document.getElementById('nav_skills');
    const nav_projects = document.getElementById('nav_projects');
    const nav_contact = document.getElementById('nav_contact');

    hamburguer.addEventListener('click', () => {
        bar.classList.toggle('hamburguer__bar--open')
        hamburguer_list.classList.toggle('nav__list--open');
    });

    nav_home.addEventListener('click', () => {
        bar.classList.toggle('hamburguer__bar--open')
        hamburguer_list.classList.toggle('nav__list--open');        
    });

    nav_about.addEventListener('click', () => {
        bar.classList.toggle('hamburguer__bar--open')
        hamburguer_list.classList.toggle('nav__list--open');        
    });

    nav_skills.addEventListener('click', () => {
        bar.classList.toggle('hamburguer__bar--open')
        hamburguer_list.classList.toggle('nav__list--open');        
    });

    nav_projects.addEventListener('click', () => {
        bar.classList.toggle('hamburguer__bar--open')
        hamburguer_list.classList.toggle('nav__list--open');        
    });

    nav_contact.addEventListener('click', () => {
        bar.classList.toggle('hamburguer__bar--open')
        hamburguer_list.classList.toggle('nav__list--open');        
    });
}

hamburguer();

