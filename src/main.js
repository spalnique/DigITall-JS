import './js/enableDarkTheme';
import './js/autorization';
import { fetchData } from './js/fetchData';
import { createCategoryList } from './js/createCategoryList';
import { createButton } from './js/createButton';
import { createBookMarkup } from './js/createElementMarkup';
import { renderContent } from './js/renderContent';
import { createCategoryMarkup } from './js/createParentElementMarkup';

const refs = {
  mainTitle: document.querySelector('.main-title'),
  mainCatWrap: document.querySelector('.category-list-wrapper'),
  sidebarCatList: null,
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
  refs.mainTitle.textContent = 'Best Sellers Books';

  try {
    const topBookData = await fetchData(endPoints.topbooks);
    const topBooksMarkup = topBookData
      .map(x => {
        const title = `<h2 class="category-title">${x.list_name}</h2>`;
        const catMarkup = createCategoryMarkup(x.books, createBookMarkup);
        const button = createButton('see-more-button', 'See more', x.list_name);
        return title + catMarkup + button;
      })
      .join('');
    renderContent(refs.mainCatWrap, topBooksMarkup);
  } catch (error) {
    console.log('Error getting top sellers book data:', error);
  }

  try {
    const catListData = await fetchData(endPoints.list);
    const catListMarkup = createCategoryList(catListData);
    renderContent(refs.catList, catListMarkup);
  } catch (error) {
    console.log('Error getting sidebar category list:', error);
  }

  refs.catList.addEventListener('click', async e => {
    if (e.target === e.currentTarget) return;
    refs.mainTitle.textContent = e.target.textContent;

    try {
      const selectedCatData = await fetchData(
        endPoints.category,
        e.target.textContent
      );
      const selectedCatMarkup = createCategoryMarkup(
        selectedCatData,
        createBookMarkup
      );
      renderContent(refs.mainCatWrap, selectedCatMarkup);
    } catch (error) {
      console.log('Error getting selected category data:', error);
    }
  });

  refs.seeMoreButtons = document.querySelectorAll('.see-more-button');
  refs.seeMoreButtons.forEach(x =>
    x.addEventListener('click', async e => {
      if (!e.target.dataset.category) return;
      refs.mainTitle.textContent = e.target.dataset.category;
      try {
        const selectedCatData = await fetchData(
          endPoints.category,
          e.target.dataset.category
        );
        const selectedCatMarkup = createCategoryMarkup(
          selectedCatData,
          createBookMarkup
        );
        renderContent(refs.mainCatWrap, selectedCatMarkup);
      } catch (error) {
        console.log('Error getting selected category data:', error);
      }
    })
  );

  refs.sidebarCatList = document.querySelectorAll('.category-list');
  refs.sidebarCatList.forEach(x => {
    x.addEventListener('click', async e => {
      if (e.target === e.currentTarget) return;
      // openModal(e.target.dataset.id);
    });
  });
});
