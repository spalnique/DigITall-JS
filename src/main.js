import { fetchData } from './js/fetchData';
import { createCategoryList } from './js/createCategoryList';
import { createButton } from './js/createButton';
import { createBookMarkup } from './js/createElementMarkup';
import { renderContent } from './js/renderContent';
import { createCategoryMarkup } from './js/createParentElementMarkup';

const refs = {
  mainCatWrap: document.querySelector('.category-list-wrapper'),
  mainTitle: document.querySelector('.main-title'),
  catList: document.querySelector('.category-list'),
};

const endPoints = {
  list: '/category-list',
  topbooks: '/top-books',
  category: '/category?category=',
  id: '/{id}',
};
document.addEventListener('DOMContentLoaded', async () => {
  refs.mainTitle.textContent = 'Best Sellers Books';

  const catListData = await fetchData(endPoints.list);
  const catListMarkup = createCategoryList(catListData);
  renderContent(refs.catList, catListMarkup);

  const topBookData = await fetchData(endPoints.topbooks);
  const topBooksMarkup = topBookData
    .map(x => {
      const title = `<h2 class="category-title">${x.list_name}</h2>`;
      const catMarkup = createCategoryMarkup(x.books, createBookMarkup);
      const button = createButton('see-more-button', 'See more');
      return title + catMarkup + button;
    })
    .join('');
  renderContent(refs.mainCatWrap, topBooksMarkup);
});

refs.catList.addEventListener('click', async e => {
  if (e.target === e.currentTarget) return;
  refs.mainTitle.textContent = e.target.textContent;

  const selectedCatData = await fetchData(
    endPoints.category,
    e.target.textContent
  );
  const selectedCatMarkup = createCategoryMarkup(
    selectedCatData,
    createBookMarkup
  );
  renderContent(refs.mainCatWrap, selectedCatMarkup);
});
