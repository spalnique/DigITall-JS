import { getLS } from './workInLS';

const store = {
  offset: 0,
  count: 3,
};

export const getActualCards = () => {
  const cards = getLS('cart') || [];
  if (!cards?.length) return [];

  return cards.slice(store.offset, store.offset + store.count);
};

export const getCardsByPage = page => {
  const cards = getLS('cart');
  if (!cards?.length) return [];
  store.offset = (page - 1) * store.count;
  return getActualCards();
};

// export const showCards = page => {
//   const cards = getActualCards();
//   const cardsPerPage = 3;
//   const totalCards = cards.length;
//   const totalPages = Math.ceil(totalCards / cardsPerPage);

//   // Calculate the start and end indices for the current page
//   const startIndex = (page - 1) * cardsPerPage;
//   const endIndex = Math.min(startIndex + cardsPerPage, totalCards);

//   const cardContainer = document.getElementById('card-container');
//   cardContainer.innerHTML = ''; // Clear existing cards

//   for (let i = startIndex; i < endIndex; i++) {
//     // Create and append card elements (customize as needed)
//     const cardElement = document.createElement('div');
//     cardElement.textContent = cards[i].title; // Example: Display card title
//     cardContainer.appendChild(cardElement);
//   }

//   // Create pagination buttons
//   const paginationButtons = document.getElementById('pagination-buttons');
//   paginationButtons.innerHTML = ''; // Clear existing buttons

//   // "<<" Button (Go to first page)
//   const firstButton = createPaginationButton('<<', 1);
//   paginationButtons.appendChild(firstButton);

//   // "<" Button (Go to previous page)
//   if (page > 1) {
//     const prevButton = createPaginationButton('<', page - 1);
//     paginationButtons.appendChild(prevButton);
//   }

//   // Page Number Button
//   const pageNumberButton = createPaginationButton(page.toString(), page);
//   paginationButtons.appendChild(pageNumberButton);

//   // ">" Button (Go to next page)
//   if (page < totalPages) {
//     const nextButton = createPaginationButton('>', page + 1);
//     paginationButtons.appendChild(nextButton);
//   }

//   // ">>" Button (Go to last page)
//   const lastButton = createPaginationButton('>>', totalPages);
//   paginationButtons.appendChild(lastButton);
// };

function createPaginationButton(label, changePagination) {
  const button = document.createElement('button');
  button.classList.add('cart-pagination-btn');
  button.textContent = label;
  button.onclick = changePagination; // Attach click event
  return button;
}

export const renderPagination = (domElement, changePagination) => {
  const cart = getLS('cart') || [];

  const pages = Math.ceil(cart.length / store.count);
  const currentPage = store.offset / store.count + 1;
  if (pages === 1) return;
  if (pages === 0) {
    changePagination(0);
    return;
  }
  const paginationDiv = document.createElement('div');
  paginationDiv.classList.add('cart-pagination-btns');

  const countPageBtn = 3;
  const isStartDotsBtn = currentPage >= countPageBtn;

  const isEndDotsBtn = currentPage !== pages && pages > countPageBtn;

  // ======= render first arrow btns ======= //
  const btn1 = createPaginationButton('<<', () => {
    changePagination(1);
  });

  btn1.disabled = currentPage === 1;

  if (!btn1.disabled) {
    btn1.classList.add('cart-shrink');
  }

  paginationDiv.appendChild(btn1);

  // ======= render first arrow btns ======= //
  const btn2 = createPaginationButton('<', () => {
    changePagination(currentPage - 1);
  });

  btn2.disabled = currentPage === 1;

  if (!btn2.disabled) {
    btn2.classList.add('cart-shrink');
  }

  paginationDiv.appendChild(btn2);

  // ======= render dots btns ======= //

  const dotsBtnPrev = createPaginationButton('...', () => {});

  if (!isStartDotsBtn) {
    dotsBtnPrev.setAttribute('style', 'display:none;');
  }

  paginationDiv.appendChild(dotsBtnPrev);

  // ======= render page btn ======= //

  for (let index = 1; index <= countPageBtn; index++) {
    const newPage = isStartDotsBtn
      ? index + currentPage - countPageBtn + Number(isEndDotsBtn)
      : index;

    const pageBtn = createPaginationButton(newPage, () => {
      changePagination(newPage);
    });

    if (index === 1 && isStartDotsBtn) {
      pageBtn.setAttribute('style', 'display:none;');
    }

    if (index === countPageBtn && isEndDotsBtn) {
      pageBtn.setAttribute('style', 'display:none;');
    }

    if (currentPage === newPage) {
      pageBtn.classList.add('pagination-btn-active');
    }

    paginationDiv.appendChild(pageBtn);
  }

  // ======= render dots btns ======= //

  const dotsBtn = createPaginationButton('...', () => {});

  if (!isEndDotsBtn) {
    dotsBtn.setAttribute('style', 'display:none;');
  }

  paginationDiv.appendChild(dotsBtn);

  // ======= render next arrow btns ======= //
  const btn3 = createPaginationButton('>', () => {
    changePagination(currentPage + 1);
  });

  btn3.disabled = pages === currentPage;

  if (!btn3.disabled) {
    btn3.classList.add('cart-shrink');
  }

  paginationDiv.appendChild(btn3);

  // ======= render last arrow btns ======= //
  const btn4 = createPaginationButton('>>', () => {
    changePagination(pages);
  });

  btn4.disabled = pages === currentPage;

  if (!btn4.disabled) {
    btn4.classList.add('cart-shrink');
  }

  paginationDiv.appendChild(btn4);
  domElement.appendChild(paginationDiv);
};
