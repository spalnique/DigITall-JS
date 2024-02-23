export function renderContent(parentElement, ...markups) {
  parentElement.innerHTML = markups.reduce((acc, x) => acc + x, '');
}
