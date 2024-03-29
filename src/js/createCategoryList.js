import { refs } from './refs';
import { fetchData } from './fetchData';
import { endPoints } from './fetchData';
import { createAndOpenModalWindow } from './modal';
import {
  createCategoryMarkup,
  createBookMarkup,
  renderContent,
  renderLoader,
} from './createMarkups';
import { renderTopSellers } from './createTopSellers';
import { showElement } from './showHideFn';

catList();

refs.catList.addEventListener('click', e => {
  onCatClick(e);
  window.scrollTo({ top: refs.mainTitle.offsetTop - 20, behavior: 'smooth' });
});

async function catList() {
  const catListData = await fetchData(endPoints.list);
  const catListMarkup = createCategoryList(catListData);
  renderContent(refs.catList, catListMarkup);
}

function createCategoryList(data) {
  const titleMarkup = `<li class="sidebar-category-item"><p class="sidebar-category-text make-blue">All categories</p></li>`;
  const itemsMarkup = data
    .map(
      item =>
        `<li class="sidebar-category-item" data-category="${item.list_name}"><p class="sidebar-category-text" data-category="${item.list_name}">${item.list_name}</p></li>`
    )
    .join('');
  const mainMarkup = titleMarkup + itemsMarkup;
  return mainMarkup;
}

function linkIsActive(e) {
  if (e.target.nodeName === 'LI') {
    const arrayElem = e.target.parentElement.querySelectorAll(
      '.sidebar-category-text'
    );
    arrayElem.forEach(item => {
      item.classList.remove('make-blue');
    });
    e.target.firstElementChild.classList.add('make-blue');
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

async function onCatClick(e) {
  if (e.target === e.currentTarget) return;

  if (!e.target.dataset.category) {
    refs.mainTitle.innerHTML = `Best Sellers <span>Books</span>`;
    refs.mainTitle.scrollIntoView({ behavior: 'smooth' }); //!
    linkIsActive(e);
    renderTopSellers();
    return;
  }
  linkIsActive(e);
  renderLoader(refs.mainCatWrap);
  const strArr = e.target.dataset.category.split(' ');
  strArr[strArr.length - 1] = `<span>${strArr[strArr.length - 1]}</span>`;
  refs.mainTitle.innerHTML = strArr.join(' ');
  refs.mainTitle.scrollIntoView({ behavior: 'smooth' }); //!
  const selectedCatData = await fetchData(
    endPoints.category,
    e.target.dataset.category
  );
  const selectedCatMarkup = createCategoryMarkup(
    selectedCatData,
    createBookMarkup
  );
  renderContent(refs.mainCatWrap, selectedCatMarkup, createAndOpenModalWindow);
  const catBooks = document.querySelectorAll('.main-category-item');
  catBooks.forEach(x => showElement(x));
}
