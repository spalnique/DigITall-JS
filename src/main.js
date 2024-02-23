import * as request from './js/fetchData';
import { createCategoryList } from './js/createCategoryList';

const refs = {
  categoryList: document.querySelector('.category-list'),
};

const categories = await request.fetchData(request.endPoints.list);
const categoryListMarkup = createCategoryList(categories);
refs.categoryList.innerHTML = categoryListMarkup;
