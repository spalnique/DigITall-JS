import { getLS, setLS } from './workInLS';
import amazon from '../img/png/amazon.png';
import apple from '../img/png/apple-book.png';
import { createCategoryMarkup } from './createParentElementMarkup';
import { getActualCards } from './cartPagination';

export const makeDeleteCardFromLSHandler = domElement => id => {
  const cart = getLS('cart');
  const newCart = cart.filter(book => book._id !== id);
  setLS('cart', newCart.length > 0 ? newCart : null);
  renderContent(domElement, getActualCards(newCart));
};

const createCardsMarkup = book => {
  return `<li class="cart-item-glow cart-item">
          <img class="cart-image" src="${book.book_image}"/>
          <div class="cart-book-section">
            <h3 class="cart-book-title">${book.title}</h3>
            <button class="cart-remove-book-btn" onclick="window.deleteCardFromLSHandler('${book._id}')">
              <span class="cart-trash">
                <span></span>
                <i></i>
              </span>
            </button>
            <p class="cart-book-category">${book.list_name}</p>
            <p class="cart-book-description">
             ${book.description}
            </p>

            <p class="cart-book-autor">${book.author}</p>
            <div class="cart-book-links">
              <a href=${book.buy_links[0].url} class="cart-amazon cart-amazon-dark">
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
        </li>`;
};

const createEmptyCartMarkup = () => {
  return `<li class="cart-background">
        <p class="cart-background-text">
          This page is empty, add some books and proceed to order.
        </p>
        <img class="cart-bg-img" src="../img/png/cart-background.png" />
      </li>`;
};

const renderContent = (domElement, cart) => {
  if (!cart?.length) {
    domElement.innerHTML = createCategoryMarkup([''], createEmptyCartMarkup);
    return;
  }
  domElement.innerHTML = createCategoryMarkup(cart, createCardsMarkup);
};

export const renderCart = domElement => {
  const cart = getLS('cart');
  renderContent(domElement, getActualCards(cart));
};
