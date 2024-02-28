import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import { refs } from './header';
import icon from '../img/icons.svg';
import { instanceSignUp, onInstanceSignUpShow } from './header';

const menuMarkup = `<div class="menu-container">
    <div class="menu-user-profile">
        <div class="menu-user-icon-wrapper">
          <svg class="menu-user-icon" width="19" height="19">
            <use href=${icon}#user-fill></use></svg>
        </div>
        <p class="menu-user-name"></p>
    </div>
   
    <ul id="menu-list" class="menu-nav-list">
      <li class="menu-nav-item">
          <a class="menu-nav-link menu-nav-link-home make-yellow" href="./index.html">Home</a>
        </li>
      <li class="menu-nav-item">
        <a class="menu-nav-link menu-nav-link-shop shopping-link" href="../shopping-list.html">
          Shopping List
        <svg class="menu-nav-icon-shop" width="20" height="20">
        <use href=${icon}#icon-uil-cart></use></svg>
        </a>
        </li>
    </ul>
    
    <button type="button" class="menu-log-out-btn">Log out<svg class="menu-log-out-icon" width="20" height="20">
      <use href=${icon}#arrow-narrow-right></use>
        </svg>
    </button>
    </div>`;

const menuSignUpMarkup = `<div class="menu-container menu-sign-up-container">
    <button type="button" class="menu-sign-up-btn">Sign Up<svg class="menu-log-out-icon" width="20" height="20">
      <use href=${icon}#arrow-narrow-right></use>
        </svg>
    </button>
    </div>`;

export const menuModal = basicLightbox.create(menuMarkup, {
  className: 'mob-menu-lightbox',
  onClose: () => onCloseMenuModal,
});

export const menuSignUp = basicLightbox.create(menuSignUpMarkup, {
  className: 'mob-menu-lightbox',
  onClose: onCloseMenuModal,
});

function onShowMenuModal(i) {
  if (i.element().querySelector('.menu-user-name')) {
    i.element().querySelector('.menu-user-name').textContent = JSON.parse(
      localStorage.getItem('userInfo')
    );
  }

  refs.headerContainer.classList.add('change-z-index');
  refs.menuOpenButton.classList.add('hidden');
  refs.menuCloseButton.classList.add('visible-flex');
  document.body.classList.add('scroll-ban');
}

function onCloseMenuModal() {
  refs.headerContainer.classList.remove('change-z-index');
  refs.menuOpenButton.classList.remove('hidden');
  refs.menuCloseButton.classList.remove('visible-flex');
  document.body.classList.remove('scroll-ban');
  menuSignUpButton.removeEventListener('click', onMenuSignUpButtonClick);
  menuLogoutButton.removeEventListener('click', onMenuLogOutButtonClick);
}

export function showMenuModal(i) {
  i.show(onShowMenuModal);
}
export function closeMenuModal(i) {
  i.close();
  onCloseMenuModal();
}
export function onMenuCloseButtonClick() {
  if (JSON.parse(localStorage.getItem('userInfo'))) {
    closeMenuModal(menuModal);
  } else {
    closeMenuModal(menuSignUp);
  }
}
export function onMenuOpenButtonClick() {
  if (JSON.parse(localStorage.getItem('userInfo'))) {
    showMenuModal(menuModal);
  } else {
    showMenuModal(menuSignUp);
  }
}

export const menuLogoutButton = menuModal
  .element()
  .querySelector('.menu-log-out-btn');
export const menuSignUpButton = menuSignUp
  .element()
  .querySelector('.menu-sign-up-btn');

export function onMenuLogOutButtonClick() {
  if (location.pathname.includes('shopping-list')) {
    location.pathname = '/';
  }
  localStorage.removeItem('userInfo');
  closeMenuModal(menuModal);
}

export function onMenuSignUpButtonClick() {
  closeMenuModal(menuSignUp);
  instanceSignUp.show(onInstanceSignUpShow);
}

menuSignUpButton.addEventListener('click', onMenuSignUpButtonClick);
menuLogoutButton.addEventListener('click', onMenuLogOutButtonClick);
