import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import icon from '../img/icons.svg';
import amazon from '../img/png/amazon.png';
import apple from '../img/png/apple-book.png';
import { fetchData } from './fetchData';

const textForAddButton = 'Add to shopping list';
const textForRemoveButton = 'Remove from the shopping list';
const textIfBookIsAdded =
  'Congratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".';
const textIfBookIsRemoved = '';
const textNotFoundDescription = 'No description has been added to this book';

async function createModalWindowMarkup(e) {
  const id = e.target.dataset.id;
  const result = await fetchData(id);

  const markup = `<div class="modal-container">
        <button class="modal-button-close" type="button">
        <svg class="modal-icon-close" width="24" height="24">
        <use href=${icon}#x-close></use></svg></button>

        <div class="modal-book-wrapper">
        <img
          class="modal-img"
          src="${result.book_image}"
          alt="${result.title}"
          width="287"
          height="408"/>
        
        <div class="modal-book-desc-wrapper">
        <h2 class="modal-book-title dark-theme">${result.title}</h2>
        <h3 class="modal-book-author">${result.author}</h3>
        <p class="modal-book-desc dark-theme">${
          result.description ? result.description : textNotFoundDescription
        }</p>
            
        <div class="modal-buy-links-wrapper">
        <a
          class="modal-buy-link"
          href=${result.buy_links[0].url}
          target="_blank">
        <img 
          class="modal-link-amazon-icon" 
          src=${amazon} 
          alt="Amazon product link"
          width="62"
          height="19"/></a>
        <a
          class="modal-buy-link"
          href=${result.buy_links[1].url}
          target="_blank">
        <img
          class="modal-link-apple-icon"
          src=${apple}
          alt="Apple-book product link"
          width="33"
          height="32"/></a></div></div></div>

        <div class="button-toggle-wrapper">
          <button class="add-remove-button" type="button">${textForRemoveButton}</button>
          <p class="modal-text make-visible">${textIfBookIsAdded}</p>
        </div></div>`;
  return markup;
}

export async function createAndOpenModalWindow(e) {
  if (e.target === e.currentTarget) return;
  const modalWindowMarkup = await createModalWindowMarkup(e);
  basicLightbox
    .create(modalWindowMarkup, {
      onClose: onCloseModalWindow(),
    })
    .show(onShowModalWindow);
}

function onShowModalWindow(i) {
  checkWindowSize();
  document.body.classList.add('scroll-ban');
  const closeButton = i.element().querySelector('.modal-button-close');
  const addRemoveButton = i.element().querySelector('.add-remove-button');
  closeButton.addEventListener('click', () => i.close());
  addRemoveButton.addEventListener('click', onClickAddRemoveButton);
  window.addEventListener('resize', checkWindowSize);
}

function onCloseModalWindow() {
  return () => {
    document.body.classList.remove('scroll-ban');
    window.removeEventListener('resize', checkWindowSize);
  };
}

function onClickAddRemoveButton(e) {
  if (e.currentTarget.textContent === textForAddButton) {
    console.log('Here will be a function that add books');
    e.currentTarget.textContent = textForRemoveButton;
    e.currentTarget.nextElementSibling.textContent = textIfBookIsAdded;
  } else if (e.currentTarget.textContent === textForRemoveButton) {
    console.log('Here will be a function that remove books');
    e.currentTarget.textContent = textForAddButton;
    e.currentTarget.nextElementSibling.textContent = textIfBookIsRemoved;
  }
}

function checkWindowSize() {
  const lightboxContainer = document.querySelector('.basicLightbox');
  const modalContainer = document.querySelector('.modal-container');
  if (window.innerHeight < modalContainer.offsetHeight) {
    lightboxContainer.classList.add('lightbox-scroll');
  } else {
    lightboxContainer.classList.remove('lightbox-scroll');
  }
}
