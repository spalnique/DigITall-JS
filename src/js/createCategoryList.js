export function createCategoryList(data) {
  return Array.from(data, item => `<li class="category-list-item">${item.list_name}</li>`).join('');
}
