export function createCategoryList(data) {
  const titleMarkup = `<li class="sidebar-category-title">All categories</li>`;
  const itemsMarkup = data
    .map(
      item =>
        `<li class="sidebar-category-item" data-category="${item.list_name}"><p class="sidebar-category-text" data-category="${item.list_name}">${item.list_name}</p></li>`
    )
    .join('');
  const mainMarkup = titleMarkup + itemsMarkup;
  return mainMarkup;
}
