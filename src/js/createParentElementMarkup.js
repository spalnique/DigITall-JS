export function createCategoryMarkup(data, bookMarkupFn) {
  const innerMarkup = data.map(x => bookMarkupFn(x)).join('');
  const categoryMarkup = `<ul class="main-category-list">${innerMarkup}</ul>`;
  return categoryMarkup;
}
