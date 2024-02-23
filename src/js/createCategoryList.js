export function createCategoryList(data) {
  return Array.from(data, item => `<li>${item.list_name}</li>`).join('');
}
