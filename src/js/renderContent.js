export function renderContent(parentElement, markup, listenerCallbackFn) {
  parentElement.innerHTML = markup;
  const catList = document.querySelectorAll('.main-category-list');
  catList.forEach(x => {
    x.addEventListener('click', listenerCallbackFn);
  });
}
