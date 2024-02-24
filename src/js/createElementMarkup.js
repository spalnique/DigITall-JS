export function createBookMarkup(data) {
  // depending on e.target.dataset.id markup will differ //
  // it may be element from shopping list or the one from category on the main //
  // it may be a list of categories fetched from backend //
  return `<li class="card-book" data-id="${data._id}">
  <a class="book-link" href="${data.book_image}" data-id="${data._id}"></a>
    <img class="book-image" src="${data.book_image}"
      alt="${data.title}"
      width="${data.book_image_width}"
      height="${data.book_image_height}" data-id="${data._id}">
<div class="book-content" data-id="${data._id}">
  <h3 class="book-title" data-id="${data._id}">${data.title}</h3>
  <p class="book-author" data-id="${data._id}">${data.author}</p>
</div>
</li>`;
}
