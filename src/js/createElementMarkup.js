export function createElementMarkup(data, event) {
  // depending on e.target.dataset.id markup will differ //
  // it may be element from shopping list or the one from category on the main //
  // it may be a list of categories fetched from backend //
  return `<li class="card-book">
  <a class="book-link" href="${data.book_image}"></a>
    <img class="book-image" src="${data.book_image}" 
      alt="" 
      width="${data.book_image_width}" 
      height="${data.book_image_height}">
<div class="book-content">
  <h3 class="book-title">${data.title}</h3>
  <p class="book-author">${data.author}</p>
</div>
</li>`;
}
