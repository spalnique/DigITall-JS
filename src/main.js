import { fetchData } from './js/fetchData';
import { createCategoryList } from './js/createCategoryList';
import { createButton } from './js/createButton';
import { createElementMarkup } from './js/createElementMarkup';
import { renderContent } from './js/renderContent';
import { createParentMarkup } from './js/createParentElementMarkup';

const refs = {
  mainCatCont: document.querySelector('.main-category-wrapper'),
  mainCatList: document.querySelectorAll('.main-category'),
  mainCatTitleList: document.querySelectorAll('.main-category-title'),
  mainTitle: document.querySelector('.main-title'),
  catList: document.querySelector('.category-list'),
};

const BASE_URL = 'https://books-backend.p.goit.global/books';

const endPoints = {
  list: '/category-list',
  topbooks: '/top-books',
  category: '/category?category=',
  id: '/{id}',
};
document.addEventListener('DOMContentLoaded', async () => {
  refs.mainTitle.textContent = 'Best Sellers Books';

  const catListData = await fetchData(BASE_URL, endPoints.list);
  refs.catList.innerHTML = createCategoryList(catListData);

  const topBookData = await fetchData(BASE_URL, endPoints.topbooks);
  console.log('Top Sellers Data:', topBookData);
  const seeMoreButton = createButton('.see-more-button', 'See more');
  refs.mainCatTitleList.forEach((title, i) => {
    title.textContent = topBookData[i].list_name;
  });

  refs.mainCatList.forEach((cat, i) => {
    const catMarkup = createParentMarkup(
      topBookData[i].books,
      createElementMarkup
    );
    renderContent(cat, catMarkup, seeMoreButton);
  });
});

refs.catList.addEventListener('click', async e => {
  if (e.target === e.currentTarget) return;
  const mainCatsData = await fetchData(
    BASE_URL,
    endPoints.category,
    e.target.textContent
  );
  console.log('Category List Data:', mainCatsData);
  refs.mainTitle.textContent = e.target.textContent;
  const catMarkup = createParentMarkup(mainCatsData, createElementMarkup);
  renderContent(refs.mainCatCont, catMarkup);
});
