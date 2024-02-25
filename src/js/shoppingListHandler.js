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

const createCartPage = (
  array = [
    {
      _id: '643282b1e85766588626a0d2',
      list_name: 'Audio Fiction',
      date: '2023-04-09T09:28:40.265Z',
      age_group: '',
      amazon_product_url:
        'https://www.amazon.com/dp/0063204150?tag=NYTBSREV-20',
      article_chapter_link: '',
      author: 'Shel Van Pelt',
      book_image:
        'https://storage.googleapis.com/du-prd/books/images/9780063204157.jpg',
      book_image_width: 329,
      book_image_height: 500,
      book_review_link: '',
      book_uri: 'nyt://book/1f91d061-8667-56a8-a628-4a8af48184a1',
      contributor: 'by Shelby Van Pelt',
      contributor_note: '',
      created_date: '2023-04-05 23:10:05',
      description:
        'A widow working the night shift at the Sowell Bay Aquarium is aided in solving a mystery by a giant Pacific octopus living there. Read by Marin Ireland and Michael Urie. 11 hours, 16 minutes unabridged.',
      first_chapter_link: '',
      price: '0.00',
      primary_isbn10: '0063204185',
      primary_isbn13: '9780063204188',
      publisher: 'HarperAudio',
      rank: 3,
      rank_last_week: 0,
      sunday_review_link: '',
      title: 'REMARKABLY BRIGHT CREATURES',
      updated_date: '2023-04-05 23:10:05',
      weeks_on_list: 0,
      buy_links: [
        {
          name: 'Amazon',
          url: 'https://www.amazon.com/dp/0063204150?tag=NYTBSREV-20',
        },
        {
          name: 'Apple Books',
          url: 'https://goto.applebooks.apple/9780063204188?at=10lIEQ',
        },
        {
          name: 'Barnes and Noble',
          url: 'https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780063204188',
        },
        {
          name: 'Books-A-Million',
          url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FREMARKABLY%252BBRIGHT%252BCREATURES%252FShel%252BVan%252BPelt%252F9780063204188&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DREMARKABLY%252BBRIGHT%252BCREATURES%252BShel%252BVan%252BPelt',
        },
        {
          name: 'Bookshop',
          url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780063204188&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DREMARKABLY%2BBRIGHT%2BCREATURES',
        },
        {
          name: 'IndieBound',
          url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780063204188%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DREMARKABLY%2BBRIGHT%2BCREATURES%2BShel%2BVan%2BPelt%26aff%3DNYT',
        },
      ],
      __v: 0,
    },
  ]
) => {
  return `
 <ul class="shopping-cart">
 ${array.map(book => {
   return `<li class="cart-item-glow cart-item">
          <img class="cart-image" src="${book.book_image}"/>
          <div class="cart-book-section">
            <h3 class="cart-book-title">${book.title}</h3>
            <button class="cart-remove-book-btn">
              <span class="cart-trash">
                <span></span>
                <i></i>
              </span>
            </button>
            <p class="cart-book-category">Category</p>
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
