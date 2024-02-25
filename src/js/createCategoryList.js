export function createCategoryList(data) {
  const titleMarkup = `<li class="sidebar-category-item"><p class="sidebar-category-text">All categories</p></li>`;
  const itemsMarkup = data
    .map(
      item =>
        `<li class="sidebar-category-item" data-category="${item.list_name}"><p class="sidebar-category-text" data-category="${item.list_name}">${item.list_name}</p></li>`
    )
    .join('');
  const mainMarkup = titleMarkup + itemsMarkup;
  return mainMarkup;
}

export function linkIsActive(e) {
  if (e.target.nodeName === 'LI') {
    const arrayElem = e.target.parentElement.querySelectorAll(
      '.sidebar-category-text'
    );
    arrayElem.forEach(item => {
      item.classList.remove('make-blue');
    });
    e.target.firstElementChild.classList.add('make-blue');
    console.log(e.target.firstElementChild.textContent.split(' '));
  } else if (e.target.nodeName === 'P') {
    const arrayElem = e.target.parentElement.parentElement.querySelectorAll(
      '.sidebar-category-text'
    );
    arrayElem.forEach(item => {
      item.classList.remove('make-blue');
    });
    e.target.classList.add('make-blue');
  }
}
