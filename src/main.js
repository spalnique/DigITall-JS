import './js/enableDarkTheme';
import './js/autorization';
import './js/donation-list';
import './js/createCategoryList';
import { fetchData, endPoints } from './js/fetchData';
import {
  createBookMarkup,
  createCategoryMarkup,
  renderContent,
} from './js/createMarkups';
import { createAndOpenModalWindow } from './js/modal';
import { renderTopSellers } from './js/createTopSellers';
import { showElement, hideElement } from './js/showHideFn';
import { refs } from './js/refs';
import {
  renderCart,
  makeDeleteCardFromLSHandler,
} from './js/shoppingListHandler';
import { scrollFunction, scrollToTop } from './js/scrollButtonToTop';

renderTopSellers();
refs.mainCatWrap.addEventListener('click', onMoreButtonClick);

async function onMoreButtonClick(e) {
  if (!e.target.dataset.category) return;

  const strArr = e.target.dataset.category.split(' ');
  strArr[strArr.length - 1] = `<span>${strArr[strArr.length - 1]}</span>`;
  refs.mainTitle.innerHTML = strArr.join(' ');

  const selectedCatData = await fetchData(
    endPoints.category,
    e.target.dataset.category
  );

  const selectedCatMarkup = createCategoryMarkup(
    selectedCatData,
    createBookMarkup
  );

  renderContent(refs.mainCatWrap, selectedCatMarkup, createAndOpenModalWindow);
  const catBooks = document.querySelectorAll('.main-category-item');
  catBooks.forEach(x => showElement(x));
}
refs.shoppingListBtn.addEventListener('click', e => {
  e.preventDefault();
  e.stopPropagation();

  refs.mainTitle.innerHTML = `Shopping <span>List</span>`;
  renderCart(refs.mainCatWrap);
  window.deleteCardFromLSHandler = makeDeleteCardFromLSHandler(
    refs.mainCatWrap
  );
});

window.onscroll = function () {
  scrollFunction();
};

scrollToTopBtn.addEventListener('click', scrollToTop);
