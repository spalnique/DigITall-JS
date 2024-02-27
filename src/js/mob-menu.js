import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import { refs } from './header';
import icon from '../img/icons.svg';
const menuContent = `<div class="menu-container">
    <div class="menu-user-profile">
        <div class="menu-user-icon-wrapper">
          <svg class="menu-user-icon" width="19" height="19">
            <use href=${icon}#user-fill></use></svg>
        </div>
        <p class="menu-user-name">${JSON.parse(
          localStorage.getItem('userInfo')
        )}</p>
    </div>
   
    <ul id="menu-list" class="menu-nav-list">
      <li class="menu-nav-item">
          <a class="menu-nav-link menu-nav-link-home" href="./index.html">Home</a>
        </li>
      <li class="menu-nav-item">
        <a class="menu-nav-link menu-nav-link-shop shopping-link" href="../shopping-list.html">
          Shopping List
        <svg class="menu-nav-icon-shop" width="20" height="20">
        <use href=${icon}#uil-cart></use></svg>
        </a>
        </li>
    </ul>
    
    <button type="button" class="menu-log-out-btn">Log out<svg class="menu-log-out-icon" width="20" height="20">
      <use href=${icon}#arrow-narrow-right></use>
        </svg>
    </button>
    </div>`;

export const menuModal = basicLightbox.create(menuContent, {
  className: 'mob-menu-lightbox',
  onClose: onCloseMenuModal,
});

export function showMenuModal(i) {
  i.show(onShowMenuModal);
}

function onShowMenuModal() {
  refs.headerContainer.classList.add('change-z-index');
  refs.menuOpenButton.classList.add('hidden');
  refs.menuCloseButton.classList.add('visible-flex');
  document.body.classList.add('scroll-ban');
}
export function closeMenuModal(i) {
  i.close();
  onCloseMenuModal();
}

function onCloseMenuModal() {
  refs.headerContainer.classList.remove('change-z-index');
  refs.menuOpenButton.classList.remove('hidden');
  refs.menuCloseButton.classList.remove('visible-flex');
  document.body.classList.remove('scroll-ban');
}
