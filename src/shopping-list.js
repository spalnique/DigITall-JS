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
import { userIsLoggedIn } from './js/autorization';
userIsLoggedIn();
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
console.log(cartRefs.mainContainer);
const cartItem = document.querySelector('.cart-item');
console.log(cartRefs.cartItem);

refs.mainTitle.innerHTML = `Shopping <span>List</span>`;
renderCart(refs.shopListWrap);
window.deleteCardFromLSHandler = makeDeleteCardFromLSHandler(refs.shopListWrap);

const checkBox = document.querySelector('#themeToggle');

const isCheckBoxActive = checkBox.checked;

checkBox.addEventListener('click', () => {
  if (isCheckBoxActive) {
    // Remove the 'dark-theme' class from the list of elements
    // (assuming they have the classList property)
    cartRefs.mainContainer.classList.remove('main-container-dark-theme');
    cartRefs.mainTitle.classList.remove('main-title-dark-theme');
    cartRefs.cartItem.classList.remove('cart-item-dark-theme');
    cartRefs.cartBookTitle.classList.remove('cart-book-title-dark-theme');
    cartRefs.cartBookDescription.classList.remove(
      'cart-book-description-dark-theme'
    );
    cartRefs.cartAmazon.classList.remove('cart-amazon-dark-theme');
    cartRefs.cartAppleBooks.classList.remove('cart-apple-books-dark-theme');
  } else {
    // Add the 'dark-theme' class to the list of elements
    cartRefs.mainContainer.classList.add('main-container-dark-theme');
    cartRefs.mainTitle.classList.add('main-title-dark-theme');
    cartRefs.cartItem.classList.add('cart-item-dark-theme');
    cartRefs.cartBookTitle.classList.add('cart-book-title-dark-theme');
    cartRefs.cartBookDescription.classList.add(
      'cart-book-description-dark-theme'
    );
    cartRefs.cartAmazon.classList.add('cart-amazon-dark-theme');
    cartRefs.cartAppleBooks.classList.add('cart-apple-books-dark-theme');
  }
  console.log(checkBox.checked);
});

// checkBox.addEventListener('click', () => {
//   if (checkBox.checked) {
//     // the list of elements removed dark theme?
//     classList.remove('dark-theme');
//   } else {
//     // to the list of my elements add dark theme classlist
//     classList.add('dark-theme');
//   }
//   console.log(checkBox.checked);
// });

// function toggleDarkTheme() {
//   let classList = hederContainer.classList;
//   checkBox.checked
//     ? classList.add('dark-theme')
//     : classList.remove('dark-theme');
// }
