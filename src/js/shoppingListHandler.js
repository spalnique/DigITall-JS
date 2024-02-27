import { getLS, setLS } from './workInLS';
import amazon from '../img/png/amazon.png';
import apple from '../img/png/apple-book.png';
import emptyCart from '../img/png/cart-background.png';
import { createCategoryMarkup } from './createMarkups';
import {
  getActualCards,
  getCardsByPage,
  renderPagination,
} from './cartPagination';

export const makeDeleteCardFromLSHandler = domElement => id => {
  const cart = getLS('cart');
  const newCart = cart.filter(book => book._id !== id);
  setLS('cart', newCart.length > 0 ? newCart : null);
  renderCartMarkupWithPagination(domElement, getActualCards(newCart));
};

const createCardsMarkup = book => {
  return `<li class="cart-item-glow cart-item">
          <img class="cart-image" src="${book.book_image}"/>
          <div class="cart-book-section">
            <h3 class="cart-book-title">${book.title}</h3>
            <button class="cart-remove-book-btn" onclick="window.deleteCardFromLSHandler('${
              book._id
            }')">
              <span class="cart-trash">
                <span></span>
                <i></i>
              </span>
            </button>
            <p class="cart-book-category">${book.list_name}</p>
            <p class="cart-book-description">
             ${
               book.description
                 ? book.description
                 : 'No description has been added to this book'
             }
            </p>
            <div class="cart-info-wrapper">
            <p class="cart-book-autor">${book.author}</p>
            <div class="cart-book-links">
              <a href=${
                book.buy_links[0].url
              } class="cart-amazon cart-amazon-dark">
                <img src=${amazon} alt=${book.buy_links[0].name} />
              </a>
              <a
                href=${book.buy_links[1].url}
                class="cart-apple-books cart-apple-books-dark"
              >
                <img src=${apple} alt=${book.buy_links[1].name} />
              </a>
            </div>
            </div>
          </div>
        </li>`;
};

const createEmptyCartMarkup = () => {
  return `<li class="cart-background">
        <p class="cart-background-text">
          This page is empty, add some books and proceed to order.
        </p>
        <img class="cart-bg-img" src="${emptyCart}" />
      </li>`;
};

const makeChangePagination = domElement => page => {
  const cart = getCardsByPage(page);
  renderContent(domElement, cart);
};

const renderCartMarkupWithPagination = (domElement, cart) => {
  domElement.innerHTML = createCategoryMarkup(cart, createCardsMarkup);
  renderPagination(domElement, makeChangePagination(domElement));
};

const renderContent = (domElement, cart) => {
  if (!cart?.length) {
    domElement.innerHTML = createCategoryMarkup([''], createEmptyCartMarkup);
    return;
  }
  renderCartMarkupWithPagination(domElement, cart);
};

export const renderCart = domElement => {
  const cart = getLS('cart');
  renderContent(domElement, getActualCards(cart));
};
