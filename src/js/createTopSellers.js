import {
  createCategoryMarkup,
  createBookMarkup,
  createButton,
  renderContent,
} from './createMarkups';
import { fetchData, endPoints } from './fetchData';
import { createAndOpenModalWindow } from './modal';
import { refs } from './refs';

function createTopSellers(data) {
  return data
    .map(x => {
      const strArr = x.list_name.split(' ');
      strArr[strArr.length - 1] = `<span>${strArr[strArr.length - 1]}</span>`;
      const title = `<h2 class="category-title">${strArr.join(' ')}</h2>`;
      const catMarkup = createCategoryMarkup(x.books, createBookMarkup);
      const button = createButton('see-more-button', 'See more', x.list_name);
      return title + catMarkup + button;
    })
    .join('');
}

export async function renderTopSellers() {
  const topBookData = await fetchData(endPoints.topbooks);
  const topBooksMarkup = createTopSellers(topBookData);
  renderContent(refs.mainCatWrap, topBooksMarkup, createAndOpenModalWindow);
}
