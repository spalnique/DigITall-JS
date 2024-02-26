const scrollToTopBtn = document.querySelector('.scrollToTopBtn');

window.onscroll = function () {
  scrollFunction();
};

export function scrollFunction() {
  const scrolled =
    document.body.scrollTop || document.documentElement.scrollTop;
  if (scrolled > 20) {
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
}

scrollToTopBtn.addEventListener('click', scrollToTop);

export function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
