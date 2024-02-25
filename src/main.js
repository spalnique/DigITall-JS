import './js/enableDarkTheme';
import './js/autorization';
import { fetchData } from './js/fetchData';
import { createCategoryList, linkIsActive } from './js/createCategoryList';
import { createBookMarkup } from './js/createElementMarkup';
import { renderContent } from './js/renderContent';
import { createCategoryMarkup } from './js/createParentElementMarkup';
import { createAndOpenModalWindow } from './js/modal';
import { createTopSellers } from './js/createTopSellers';
import { showElement, hideElement } from './js/showHideFn';
import { getCartData } from './js/cartDataHandler';
import {
  renderDonations,
  scrollDonations,
  toggleScrollIconDirection,
} from './js/donation-list';

const donation = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: './img/new_png/save-the-children.png',
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: './img/new_png/project-hope.png',
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: './img/new_png/int-med-corps.png',
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: './img/new_png/razom.png',
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: './img/new_png/act-against-hunger.png',
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: './img/new_png/prytula.png',
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: './img/new_png/msf.png',
  },

  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: './img/new_png/world-vision.png',
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: './img/new_png/united24.png',
  },
];

const refs = {
  mainTitle: document.querySelector('.main-title'),
  mainCatWrap: document.querySelector('.category-list-wrapper'),
  mainCatList: null,
  catList: document.querySelector('.sidebar-category-list'),
  seeMoreButtons: null,
  donationListElement: document.querySelector('.sidebar-donation-list'),
  arrowIcon: document.querySelector('.sidebar-arrow-btn'),
  scrollButton: document.querySelector('.sidebar-scroll-btn'),
  shoppingList: document.querySelector('.shopping-link'),
};

const endPoints = {
  list: '/category-list',
  topbooks: '/top-books',
  category: '/category?category=',
  id: '/{id}',
};

document.addEventListener('DOMContentLoaded', async () => {
  refs.mainTitle.innerHTML = `Best Sellers <span>Books</span>`;

  const topBookData = await fetchData(endPoints.topbooks);
  const topBooksMarkup = createTopSellers(topBookData);
  renderContent(refs.mainCatWrap, topBooksMarkup, createAndOpenModalWindow);

  const catListData = await fetchData(endPoints.list);
  const catListMarkup = createCategoryList(catListData);
  renderContent(refs.catList, catListMarkup);

  refs.catList.addEventListener('click', async e => {
    if (e.target === e.currentTarget) return;
    if (!e.target.dataset.category) {
      refs.mainTitle.innerHTML = 'Best Sellers <span>Books</span>';
      renderContent(refs.mainCatWrap, topBooksMarkup, createAndOpenModalWindow);
      refs.seeMoreButtons = document.querySelectorAll('.see-more-button');
      refs.seeMoreButtons.forEach(x =>
        x.addEventListener('click', async e => {
          if (!e.target.dataset.category) return;
          const strArr = e.target.dataset.category.split(' ');
          strArr[strArr.length - 1] = `<span>${
            strArr[strArr.length - 1]
          }</span>`;
          refs.mainTitle.innerHTML = strArr.join(' ');
          const selectedCatData = await fetchData(
            endPoints.category,
            e.target.dataset.category
          );
          const selectedCatMarkup = createCategoryMarkup(
            selectedCatData,
            createBookMarkup
          );
          renderContent(
            refs.mainCatWrap,
            selectedCatMarkup,
            createAndOpenModalWindow
          );
          const catBooks = document.querySelectorAll('.main-category-item');
          catBooks.forEach(x => showElement(x));
        })
      );
      return;
    }
    linkIsActive(e);
    const strArr = e.target.dataset.category.split(' ');
    strArr[strArr.length - 1] = `<span>${strArr[strArr.length - 1]}</span>`;
    refs.mainTitle.innerHTML = strArr.join(' ');

    const selectedCatData = await fetchData(
      endPoints.category,
      e.target.textContent
    );
    const selectedCatMarkup = createCategoryMarkup(
      selectedCatData,
      createBookMarkup
    );
    renderContent(
      refs.mainCatWrap,
      selectedCatMarkup,
      createAndOpenModalWindow
    );
    const catBooks = document.querySelectorAll('.main-category-item');
    catBooks.forEach(x => showElement(x));
  });

  renderDonations(refs.donationListElement, donation);

  refs.scrollButton.addEventListener('click', () => {
    scrollDonations(refs.donationListElement, donation);
    toggleScrollIconDirection(refs.arrowIcon);
  });

  refs.seeMoreButtons = document.querySelectorAll('.see-more-button');
  refs.seeMoreButtons.forEach(x =>
    x.addEventListener('click', async e => {
      if (!e.target.dataset.category) return;
      const strArr = e.target.dataset.category.split(' ');
      strArr[strArr.length - 1] = `<span>${strArr[strArr.length - 1]}</span>`;
      refs.mainTitle.innerHTML = strArr.join(' ');
      const selectedCatData = await fetchData(
        endPoints.category,
        e.target.dataset.category
      );
      const selectedCatMarkup = createCategoryMarkup(
        selectedCatData,
        createBookMarkup
      );
      renderContent(
        refs.mainCatWrap,
        selectedCatMarkup,
        createAndOpenModalWindow
      );
      const catBooks = document.querySelectorAll('.main-category-item');
      catBooks.forEach(x => showElement(x));
    })
  );
  refs.shoppingList.addEventListener('click', e => {
    const shoppingListData = getCartData();
    console.log(shoppingListData);
  })
});
