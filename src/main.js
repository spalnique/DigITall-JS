import './js/enableDarkTheme';
import './js/autorization';
import './js/donation-list';
import './js/createCategoryList';
import './js/scroll';
import { fetchData, endPoints } from './js/fetchData';
import {
  createBookMarkup,
  createCategoryMarkup,
  renderContent,
  renderLoader,
} from './js/createMarkups';
import { createAndOpenModalWindow } from './js/modal';
import { renderTopSellers } from './js/createTopSellers';
import { showElement, setActivePage } from './js/showHideFn';
import { refs } from './js/refs';
import './js/mob-menu';
import { isUserLoggedIn } from './js/autorization';
import './js/footer';

isUserLoggedIn();
setActivePage('header-nav-link-home');
renderTopSellers();
refs.mainCatWrap.addEventListener('click', onMoreButtonClick);

async function onMoreButtonClick(e) {
  if (!e.target.dataset.category) return;

  const strArr = e.target.dataset.category.split(' ');
  strArr[strArr.length - 1] = `<span>${strArr[strArr.length - 1]}</span>`;
  refs.mainTitle.innerHTML = strArr.join(' ');
  refs.mainTitle.scrollIntoView({ behavior: 'smooth' }); //!

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
