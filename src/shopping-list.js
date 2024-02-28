import './js/enableDarkTheme';
import './js/autorization';
import './js/donation-list';
import './js/cart-countdown-timer';
import { refs } from './js/refs';
import {
  renderCart,
  makeDeleteCardFromLSHandler,
} from './js/shoppingListHandler';
import { setActivePage } from './js/showHideFn';
import { isUserLoggedIn } from './js/autorization';
import { getLS, setLS } from './js/workInLS';

isUserLoggedIn();
setActivePage('header-nav-link-shop');

export const cartRefs = {
  body: document.querySelector('body'),
  mainContainer: document.querySelector('.main-container'),
  mainTitle: document.querySelector('.main-title'),
  cartTimerWrap: document.querySelector('.cart-timer-wrap'),
  cartItem: document.querySelector('.cart-item'),
  cartBookTitle: document.querySelector('.cart-book-title'),
  cartBookDescription: document.querySelector('.cart-book-description'),
  cartAmazon: document.querySelector('.cart-amazon'),
  cartAppleBooks: document.querySelector('.cart-apple-books'),
};

refs.mainTitle.innerHTML = `Shopping <span>List</span>`;
renderCart(refs.shopListWrap);
window.deleteCardFromLSHandler = makeDeleteCardFromLSHandler(refs.shopListWrap);

const checkBox = document.querySelector('#themeToggle');

const handleCartDarkTheme = event => {
  const { value: isDarkTheme } = getLS('isDarkTheme') || {};

  if (event ? checkBox.checked : isDarkTheme) {
    cartRefs.body.classList.add('dark-theme');
    checkBox.checked = true;
    setLS('isDarkTheme', { value: true });
  } else {
    checkBox.checked = false;
    cartRefs.body.classList.remove('dark-theme');
    setLS('isDarkTheme', null);
  }
};
handleCartDarkTheme();

checkBox.addEventListener('click', handleCartDarkTheme);

// function clearCart() {
//   setLS('cart', null);
// }

// clearCart();
