// export function renderContent(parentElement, ...markups) {
// parentElement.innerHTML = markups.reduce((acc, x) => acc + x, '');
// }

export function renderContent(parentElement, markup) {
  parentElement.innerHTML = markup;
}
