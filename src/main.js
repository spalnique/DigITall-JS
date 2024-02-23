import { fetchData } from './js/fetchData';
import { createCategoryList } from './js/createCategoryList';

const refs = {
  mainCatCont: document.querySelector('.main-category-container'),
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

const categories = await fetchData(BASE_URL, endPoints.list);
refs.catList.innerHTML = createCategoryList(categories);

refs.catList.addEventListener('click', async e => {
  if (e.target === e.currentTarget) return;
  const mainCatsData = await fetchData(BASE_URL, endPoints.category, e.target.textContent);
  console.log(mainCatsData);
  refs.mainTitle.textContent = e.target.textContent;
});
