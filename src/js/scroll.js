// =======================
const buttonUp = document.querySelector('.button-up');

buttonUp.addEventListener('click', scrollOnClick);

window.addEventListener('scroll', trackScroll);

function trackScroll() {
  const offset = window.pageYOffset;
  const coord = document.documentElement.clientHeight;
  if (offset > coord) {
    buttonUp.classList.add('button-up--show');
  } else {
    buttonUp.classList.remove('button-up--show');
  }
}

function scrollOnClick() {
  if (window.pageYOffset > 0) {
    window.scrollBy(0, -75);
    setTimeout(scrollOnClick, 0);
  }
}
