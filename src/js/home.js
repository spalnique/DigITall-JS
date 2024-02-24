import { createElementMarkup } from './js/createElementMarkup';

const bestSellers = await fetchData(BASE_URL, endPoints.topbooks);
const topBooksList = document.querySelector('.top-books-list');

function renderBooks(elements) {
  const renderBooksList = books => {
    return books.map(book => createElementMarkup(book)).join('\n');
  };

  const markup = elements
    .map(({ books, list_name }) => {
      const booksMarkup = renderBooksList(books);
      return `
      <li class="categories-item">${list_name}
        <ul class="categories-books-list">
          ${booksMarkup}
        </ul>
        <button class="categories-btn" type="button">See more</button>
      </li>`;
    })
    .join('\n');

  topBooksList.insertAdjacentHTML('beforeend', markup);
}
renderBooks(bestSellers);
