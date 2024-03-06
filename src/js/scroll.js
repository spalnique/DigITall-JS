import { debounce } from './donation-list';

const buttonUp = document.querySelector('.button-up');

function handlerForWindowScroll() {
  if (window.innerHeight / 2 < window.scrollY) {
    buttonUp.classList.add('button-up--show');
    buttonUp.addEventListener('click', handlerForButtonUp);
  } else {
    buttonUp.classList.remove('button-up--show');
    buttonUp.removeEventListener('click', handlerForButtonUp);
  }
}

function handlerForButtonUp() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

const scrollHandlerDebounced = debounce(handlerForWindowScroll, 100);
window.addEventListener('scroll', scrollHandlerDebounced);
