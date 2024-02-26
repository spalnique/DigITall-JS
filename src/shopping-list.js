import './js/enableDarkTheme';
import './js/autorization';
import './js/donation-list';
import {
  createBookMarkup,
  createCategoryMarkup,
  renderContent,
} from './js/createMarkups';
import { createAndOpenModalWindow } from './js/modal';
import { getCartData } from './js/cartDataHandler';
import { refs } from './js/refs';
import {
  renderCart,
  makeDeleteCardFromLSHandler,
} from './js/shoppingListHandler';
import { setActivePage } from './js/showHideFn';
import { userIsLoggedIn } from './js/autorization';
userIsLoggedIn();
setActivePage('header-nav-link-shop');
// const shoppingListData = getCartData();
// const markup = createCategoryMarkup(shoppingListData, createBookMarkup);
// renderContent(refs.shopListWrap, markup, createAndOpenModalWindow);

// move function  from main.js to shopping-list.js

// refs.shoppingListBtn.addEventListener('click', e => {
// e.preventDefault();
// e.stopPropagation();

refs.mainTitle.innerHTML = `Shopping <span>List</span>`;
renderCart(refs.shopListWrap);
window.deleteCardFromLSHandler = makeDeleteCardFromLSHandler(refs.shopListWrap);
// });
