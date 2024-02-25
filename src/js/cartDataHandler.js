export function cartDataHandler(e, bookData) {
  const id = bookData._id;
  const cartDataArray = JSON.parse(localStorage.getItem('cart'))
    ? JSON.parse(localStorage.getItem('cart'))
    : [];
  if (e.target.textContent.toLowerCase().includes('add')) {
    cartDataArray.push(bookData);
    localStorage.setItem('cart', JSON.stringify(cartDataArray));
  } else {
    const i = cartDataArray.findIndex(x => x._id === id);
    cartDataArray.splice(i, 1);
    localStorage.setItem('cart', JSON.stringify(cartDataArray));
  }
}

export function checkCartData(bookData) {
  const id = bookData._id;
  const books = JSON.parse(localStorage.getItem('cart'));
  return books ? books.some(item => item._id === id) : false;
}
