var hamburger = document.getElementById('hamburger');
var hamburgerMenu = document.getElementById('hamburger-menu');

hamburger?.addEventListener('click', () => {
  if (hamburger?.classList.contains('active')) {
    hamburger?.classList.remove('active');
    hamburger?.classList.add('not-active');
    hamburgerMenu?.classList.remove('active-menu');
    hamburgerMenu?.classList.add('not-active-menu');
  } else {
    hamburger?.classList.remove('not-active');
    hamburger?.classList.add('active');
    hamburgerMenu?.classList.remove('not-active-menu');
    hamburgerMenu?.classList.add('active-menu');
  }
});