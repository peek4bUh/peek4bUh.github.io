const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll =
        window.pageYOffset || document.documentElement.scrollTop;

    // Height shrink/expand logic
    if (currentScroll > 0) {
        header.classList.remove('h-[100px]');
        header.classList.add('h-[70px]');
        header.classList.remove('bg-(--color-bg)');
        header.classList.add('bg-[#25282e]');
    } else {
        header.classList.remove('h-[70px]');
        header.classList.add('h-[100px]');
        header.classList.remove('bg-[#25282e]');
        header.classList.add('bg-(--color-bg)');
    }

    // Hide on scroll down, show on scroll up
    if (currentScroll > lastScroll && currentScroll > 50) {
        header.classList.add('-translate-y-full');
    } else {
        header.classList.remove('-translate-y-full');
    }

    lastScroll = currentScroll <= 0 ? 0 : currentScroll;
});