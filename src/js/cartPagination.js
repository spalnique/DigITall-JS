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
    btn1.classList.add('cart-last-arrow-btn');
  }

  paginationDiv.appendChild(btn1);

  // ======= render first arrow btns ======= //
  const btn2 = createPaginationButton('<', () => {
    changePagination(currentPage - 1);
  });

  btn2.disabled = currentPage === 1;

  if (!btn2.disabled) {
    btn2.classList.add('cart-shrink');
    btn2.classList.add('cart-last-arrow-btn');
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
      pageBtn.classList.add('cart-pagination-btn-active');
      pageBtn.classList.add('cart-shrink');
    } else if (currentPage !== newPage && currentPage > newPage) {
      pageBtn.classList.add('cart-last-arrow-btn');
      pageBtn.classList.add(`cart-shrink`);
      dotsBtnPrev.classList.add('cart-last-arrow-btn');
    } else {
      pageBtn.classList.add(`cart-shrink`);
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
    btn3.classList.add('cart-next-arrow-btn');
  }

  paginationDiv.appendChild(btn3);

  // ======= render last arrow btns ======= //
  const btn4 = createPaginationButton('>>', () => {
    changePagination(pages);
  });

  btn4.disabled = pages === currentPage;

  if (!btn4.disabled) {
    btn4.classList.add('cart-shrink');
    btn4.classList.add('cart-next-arrow-btn');
  }

  paginationDiv.appendChild(btn4);
  domElement.appendChild(paginationDiv);
};
