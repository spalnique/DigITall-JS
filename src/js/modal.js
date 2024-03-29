import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import icon from '../img/icons.svg';
import amazon from '../img/png/amazon.png';
import apple from '../img/png/apple-book.png';
import { fetchData } from './fetchData';
import { cartDataHandler, checkCartData } from './cartDataHandler';
import { refs } from './refs';

const textForAddButton = 'Add to shopping list';
const textForRemoveButton = 'Remove from the shopping list';
const textIfBookIsAdded =
  'Congratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".';
const textIfBookIsRemoved = '';
const textNotFoundDescription = 'No description has been added to this book';

let bookDataById;

async function createModalWindowMarkup(e) {
  const id = e.target.dataset.id;
  const result = await fetchData(id);
  bookDataById = result;
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
        <h2 class="modal-book-title">${result.title}</h2>
        <h3 class="modal-book-author">${result.author}</h3>
        <p class="modal-book-desc">${
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
        <button class="add-remove-button modal-button-glow-styles" type="button">${
          checkCartData(result) ? textForRemoveButton : textForAddButton
        }</button>
        <span class="modal-text">${
          checkCartData(result) ? textIfBookIsAdded : textIfBookIsRemoved
        }</span>
        </div></div>`;
  return markup;
}

export async function createAndOpenModalWindow(e) {
  // if (
  //   (e.target.dataset.action === 'open-modal' && window.innerWidth > 768) ||
  //   (e.target !== e.currentTarget && window.innerWidth <= 768)
  // ) {
  //   const modalWindowMarkup = await createModalWindowMarkup(e);
  //   const modalWindowInstance = basicLightbox.create(modalWindowMarkup, {
  //     onClose: () => window.removeEventListener('resize', checkWindowSize),
  //   });
  //   modalDarkThemeFunction(modalWindowInstance);
  //   modalWindowInstance.show(onShowModalWindowInstance);
  // } else {
  //   return;
  // }
  if (e.target === e.currentTarget) return;

  const modalWindowMarkup = await createModalWindowMarkup(e);
  const modalWindowInstance = basicLightbox.create(modalWindowMarkup, {
    onClose: () => {
      window.removeEventListener('resize', checkWindowSize);
      document.body.classList.remove('scroll-ban');
    },
  });
  modalDarkThemeFunction(modalWindowInstance);
  modalWindowInstance.show(onShowModalWindowInstance);
}

function onShowModalWindowInstance(i) {
  if (!JSON.parse(localStorage.getItem('userInfo'))) {
    const buttonToggleWrapper = i
      .element()
      .querySelector('.button-toggle-wrapper');
    buttonToggleWrapper.classList.add('hidden');
  }
  checkWindowSize();
  window.addEventListener('resize', checkWindowSize);
  const closeButton = i.element().querySelector('.modal-button-close');
  const addRemoveButton = i.element().querySelector('.add-remove-button');
  document.body.classList.add('scroll-ban');
  document.addEventListener('keydown', onTypeEscape);
  closeButton.addEventListener('click', onCloseButtonClick);
  addRemoveButton.addEventListener('click', onClickAddRemoveButton);

  function onTypeEscape(e) {
    if (e.key === 'Escape') {
      i.close(removeAllEventListeners);
    }
  }

  function onCloseButtonClick() {
    i.close(removeAllEventListeners);
  }

  function removeAllEventListeners() {
    document.removeEventListener('keydown', onTypeEscape),
      addRemoveButton.removeEventListener('click', onClickAddRemoveButton),
      closeButton.removeEventListener('click', onCloseButtonClick),
      window.removeEventListener('resize', checkWindowSize);
    document.body.classList.remove('scroll-ban');
  }
}

function onClickAddRemoveButton(e) {
  if (e.currentTarget.textContent === textForAddButton) {
    cartDataHandler(e, bookDataById);
    e.currentTarget.textContent = textForRemoveButton;
    e.currentTarget.nextElementSibling.textContent = textIfBookIsAdded;
  } else if (e.currentTarget.textContent === textForRemoveButton) {
    cartDataHandler(e, bookDataById);
    e.currentTarget.textContent = textForAddButton;
    e.currentTarget.nextElementSibling.textContent = textIfBookIsRemoved;
  }
}

function modalDarkThemeFunction(instance) {
  const modalRefsClassList = {
    container: instance.element().querySelector('.modal-container').classList,
    closeButton: instance.element().querySelector('.modal-button-close')
      .classList,
    closeIcon: instance.element().querySelector('.modal-icon-close').classList,
    bookTitle: instance.element().querySelector('.modal-book-title').classList,
    desc: instance.element().querySelector('.modal-book-desc').classList,
    amazonIcon: instance.element().querySelector('.modal-link-amazon-icon')
      .classList,
    appleIcon: instance.element().querySelector('.modal-link-apple-icon')
      .classList,
    addRemoveButton: instance.element().querySelector('.add-remove-button')
      .classList,
    text: instance.element().querySelector('.modal-text').classList,
  };
  if (refs.checkbox.checked) {
    modalRefsClassList.container.add('modal-container-dark-theme');
    modalRefsClassList.closeIcon.add('modal-icon-close-dark-theme');
    modalRefsClassList.bookTitle.add('modal-text-dark-theme');
    modalRefsClassList.desc.add('modal-text-dark-theme');
    modalRefsClassList.amazonIcon.add('modal-icon-amazon-dark-theme');
    modalRefsClassList.appleIcon.add('modal-icon-apple-dark-theme');
    modalRefsClassList.addRemoveButton.add('modal-text-dark-theme');
    modalRefsClassList.addRemoveButton.add(
      'modal-button-glow-styles-dark-theme'
    );
    modalRefsClassList.text.add('modal-label-dark-theme');
  } else {
    modalRefsClassList.container.remove('modal-container-dark-theme');
    modalRefsClassList.closeIcon.remove('modal-icon-close-dark-theme');
    modalRefsClassList.bookTitle.remove('modal-text-dark-theme');
    modalRefsClassList.desc.remove('modal-text-dark-theme');
    modalRefsClassList.amazonIcon.remove('modal-icon-amazon-dark-theme');
    modalRefsClassList.appleIcon.remove('modal-icon-apple-dark-theme');
    modalRefsClassList.addRemoveButton.remove('modal-text-dark-theme');
    modalRefsClassList.addRemoveButton.remove(
      'modal-button-glow-styles-dark-theme'
    );
    modalRefsClassList.text.remove('modal-label-dark-theme');
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
