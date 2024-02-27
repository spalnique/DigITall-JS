import './js/enableDarkTheme';
import './js/autorization';
import './js/donation-list';
// import {
//   createBookMarkup,
//   createCategoryMarkup,
//   renderContent,
// } from './js/createMarkups';
// import { createAndOpenModalWindow } from './js/modal';
// import { getCartData } from './js/cartDataHandler';
import { refs } from './js/refs';
import {
  renderCart,
  makeDeleteCardFromLSHandler,
} from './js/shoppingListHandler';
import { setActivePage } from './js/showHideFn';
import { isUserLoggedIn } from './js/autorization';
isUserLoggedIn();
setActivePage('header-nav-link-shop');

const cartRefs = {
  mainContainer: document.querySelector('.main-container'),
  mainTitle: document.querySelector('.main-title'),
  cartItem: document.querySelector('.cart-item'),
  cartBookTitle: document.querySelector('.cart-book-title'),
  cartBookDescription: document.querySelector('.cart-book-description'),
  cartAmazon: document.querySelector('.cart-amazon'),
  cartAppleBooks: document.querySelector('.cart-apple-books'),
};

// const mainContainer = document.querySelector('.main-container');

refs.mainTitle.innerHTML = `Shopping <span>List</span>`;
renderCart(refs.shopListWrap);
window.deleteCardFromLSHandler = makeDeleteCardFromLSHandler(refs.shopListWrap);

const checkBox = document.querySelector('#themeToggle');

checkBox.addEventListener('click', () => {
  const isCheckBoxActive = checkBox.checked;
  if (isCheckBoxActive) {
    cartRefs.mainContainer.classList.add('dark-theme');
  } else {
    cartRefs.mainContainer.classList.remove('dark-theme');
  }
});
