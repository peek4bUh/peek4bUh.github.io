const header = document.getElementById("header");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll =
    window.pageYOffset || document.documentElement.scrollTop;

  // Height shrink/expand logic
  if (currentScroll > 0) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }

  // Hide on scroll down, show on scroll up
  if (currentScroll > lastScroll && currentScroll > 50) {
    header.classList.add("-translate-y-full");
  } else {
    header.classList.remove("-translate-y-full");
  }

  lastScroll = currentScroll <= 0 ? 0 : currentScroll;
});
