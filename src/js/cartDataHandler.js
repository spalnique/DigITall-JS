export function cartDataHandler(e, bookData) {
  const cartDataArray = JSON.parse(localStorage.getItem('cart'))
    ? JSON.parse(localStorage.getItem('cart'))
    : [];
  if (e.target.textContent.toLowerCase().includes('add')) {
    cartDataArray.push(bookData);
    localStorage.setItem('cart', JSON.stringify(cartDataArray));
  } else {
    const i = cartDataArray.findIndex(x => x._id === bookData._id);
    cartDataArray.splice(i, 1);
    localStorage.setItem('cart', JSON.stringify(cartDataArray));
  }
}

export function checkCartData(bookData) {
  const books = getCartData();
  return books ? books.some(item => item._id === bookData._id) : false;
}

export function isEmptyCartData() {
  return Boolean(getCartData().length)
}

export function getCartData() {
  return JSON.parse(localStorage.getItem('cart')) || [];
}

// function toggleLocalStorage(bookId) {
//   let storedBooks = JSON.parse(localStorage.getItem('books')) || [];
//   const bookIndex = storedBooks.indexOf(bookId);

//   if (bookIndex === -1) {
//     storedBooks.push(bookId);
//   } else {
//     storedBooks.splice(bookIndex, 1);
//   }

//   if (storedBooks.length === 0) {
//     localStorage.removeItem('books');
//   } else {
//     localStorage.setItem('books', JSON.stringify(storedBooks));
//   }
// }
