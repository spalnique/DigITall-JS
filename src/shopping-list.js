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

const shoppingListData = getCartData();
const markup = createCategoryMarkup(shoppingListData, createBookMarkup);
renderContent(refs.shopListWrap, markup, createAndOpenModalWindow);
