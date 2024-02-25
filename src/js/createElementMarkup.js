export function createBookMarkup(data) {
  // depending on e.target.dataset.id markup will differ //
  // it may be element from shopping list or the one from category on the main //
  // it may be a list of categories fetched from backend //
  return `<li class="main-category-item" data-id="${data._id}">
    <img class="main-category-img" src="${data.book_image}"
      alt="${data.title}"
      width="${data.book_image_width}"
      height="${data.book_image_height}" data-id="${data._id}">
<div class="main-category-text-wrapper" data-id="${data._id}">
  <h3 class="main-category-title" data-id="${data._id}">${data.title}</h3>
  <p class="main-category-author" data-id="${data._id}">${data.author}</p>
</div>
</li>`;
}
