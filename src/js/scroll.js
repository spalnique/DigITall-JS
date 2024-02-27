// =======================
const buttonUp = document.querySelector('.button-up');
const header = document.querySelector('.header-container');

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
    window.scrollBy();
    setTimeout(() => {
      header.scrollIntoView({ block: 'end', behavior: 'smooth' });
    }, 250);
  }
}
