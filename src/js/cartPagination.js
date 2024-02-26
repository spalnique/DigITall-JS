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
  button.classList.add('pagination-btn');
  button.classList.add('shrink');
  button.textContent = label;
  button.onclick = changePagination; // Attach click event
  return button;
}

export const renderPagination = (domElement, changePagination) => {
  const cart = getLS('cart') || [];

  const pages = Math.ceil(cart.length / store.count);

  if (pages === 1) return;
  if (pages === 0) {
    changePagination(0);
    return;
  }
  const paginationDiv = document.createElement('div');
  paginationDiv.classList.add('pagination-btns');

  for (let index = 0; index < pages; index++) {
    paginationDiv.appendChild(
      createPaginationButton(index + 1, () => {
        changePagination(index + 1);
      })
    );
  }
  domElement.appendChild(paginationDiv);
};
