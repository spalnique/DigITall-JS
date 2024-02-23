import { fetchData } from './js/fetchData';
import { createCategoryList } from './js/createCategoryList';

const refs = {
  categoryList: document.querySelector('.category-list'),
};

const BASE_URL = 'https://books-backend.p.goit.global/books';

const endPoints = {
  list: '/category-list',
  topbooks: '/top-books',
  category: '/category?category=',
  id: '/{id}',
};

const categories = await fetchData(BASE_URL, endPoints.list);
refs.categoryList.innerHTML = createCategoryList(categories);
