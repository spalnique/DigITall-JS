import './js/enableDarkTheme';
import './js/autorization';
import { fetchData } from './js/fetchData';
import { createCategoryList, linkIsActive } from './js/createCategoryList';
import { createBookMarkup } from './js/createElementMarkup';
import { renderContent } from './js/renderContent';
import { createCategoryMarkup } from './js/createParentElementMarkup';
import { createAndOpenModalWindow } from './js/modal';
import { createTopSellers } from './js/createTopSellers';
import { showElement, hideElement } from './js/showHideFn';

const refs = {
  mainTitle: document.querySelector('.main-title'),
  mainCatWrap: document.querySelector('.category-list-wrapper'),
  mainCatList: null,
  catList: document.querySelector('.sidebar-category-list'),
  seeMoreButtons: null,
};

const endPoints = {
  list: '/category-list',
  topbooks: '/top-books',
  category: '/category?category=',
  id: '/{id}',
};

document.addEventListener('DOMContentLoaded', async () => {
  refs.mainTitle.innerHTML = `Best Sellers <span>Books</span>`;

  const topBookData = await fetchData(endPoints.topbooks);
  const topBooksMarkup = createTopSellers(topBookData);
  renderContent(refs.mainCatWrap, topBooksMarkup, createAndOpenModalWindow);

  const catListData = await fetchData(endPoints.list);
  const catListMarkup = createCategoryList(catListData);
  renderContent(refs.catList, catListMarkup);

  refs.catList.addEventListener('click', async e => {
    if (e.target === e.currentTarget) return;
    if (!e.target.dataset.category) {
      refs.mainTitle.innerHTML = 'Top Sellers <span>Books</span>';
      renderContent(refs.mainCatWrap, topBooksMarkup, createAndOpenModalWindow);
      return;
    }
    linkIsActive(e);
    const strArr = e.target.dataset.category.split(' ');
    strArr[strArr.length - 1] = `<span>${strArr[strArr.length - 1]}</span>`;
    refs.mainTitle.innerHTML = strArr.join(' ');

    const selectedCatData = await fetchData(
      endPoints.category,
      e.target.textContent
    );
    const selectedCatMarkup = createCategoryMarkup(
      selectedCatData,
      createBookMarkup
    );
    renderContent(
      refs.mainCatWrap,
      selectedCatMarkup,
      createAndOpenModalWindow
    );
  });

  refs.seeMoreButtons = document.querySelectorAll('.see-more-button');
  refs.seeMoreButtons.forEach(x =>
    x.addEventListener('click', async e => {
      if (!e.target.dataset.category) return;
      refs.mainTitle.textContent = e.target.dataset.category;
      const selectedCatData = await fetchData(
        endPoints.category,
        e.target.dataset.category
      );
      const selectedCatMarkup = createCategoryMarkup(
        selectedCatData,
        createBookMarkup
      );
      renderContent(
        refs.mainCatWrap,
        selectedCatMarkup,
        createAndOpenModalWindow
      );
      const catBooks = document.querySelectorAll('.main-category-item');
      catBooks.forEach(x => showElement(x));
      console.log('Error getting selected category data:', error);
    })
  );
});
