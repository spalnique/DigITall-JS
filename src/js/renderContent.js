export function renderContent(parentElement, markup, listenerCallbackFn) {
  parentElement.innerHTML = markup;
  const catList = document.querySelectorAll('.category-list');
  catList.forEach(x => {
    x.addEventListener('click', listenerCallbackFn);
  });
}
