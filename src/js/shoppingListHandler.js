const prefixKey = ''; // needed for unification of variables as another website may have the same key

export const getLS = key => {
  try {
    const lsValue = localStorage.getItem(
      `${prefixKey ? `${prefixKey}_` : ''}${key}`
    );
    if (lsValue) {
      return JSON.parse(lsValue);
    }
    throw new Error(`I do not find ${prefixKey ? `${prefixKey}_` : ''}${key}`);
  } catch (error) {
    console.error('[getLS]: ', error);
    return null;
  }
};

// const cart = getLS("cart");

export const setLS = (key, value) => {
  try {
    value === null
      ? localStorage.removeItem(`${prefixKey ? `${prefixKey}_` : ''}${key}`)
      : localStorage.setItem(
          `${prefixKey ? `${prefixKey}_` : ''}${key}`,
          JSON.stringify(value)
        );
  } catch (error) {
    console.error('[setLS]: ', error);
    return null;
  }
};

// ===== end work in localeStorage ===== //

import amazon from '../img/png/amazon.png';
import apple from '../img/png/apple-book.png';

const mainContent = document.querySelector('.main-content');

const deleteCardFromLSHandler = id => {
  const cart = getLS('cart');
  const newCart = cart.filter(book => book._id !== id);
  console.log({ id, newCart, cart });
  setLS('cart', newCart.length > 0 ? newCart : null);
};

window.deleteCardFromLSHandler = deleteCardFromLSHandler;

const createCartPage = array => {
  return `
 <ul class="shopping-cart">
 ${array.map(book => {
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
 })}</ul>
  `;
};

export const renderCart = () => {
  const cart = getLS('cart') || [];
  const pageMarkup = `
  <div class="cart-component">
${createCartPage(cart)}
  ${'render pagination'}
      </div>
  `;
  mainContent.insertAdjacentHTML('beforeend', pageMarkup);
};
