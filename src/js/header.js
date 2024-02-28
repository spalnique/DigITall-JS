import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import icon from '../img/icons.svg';
import { logout, onFormSubmit } from './autorization';
import { onMenuCloseButtonClick, onMenuOpenButtonClick } from './mob-menu';
import { refs as mainRefs } from './refs';
import {
  onMenuSignUpButtonClick,
  onMenuLogOutButtonClick,
  menuLogoutButton,
  menuSignUpButton,
} from './mob-menu';
export const refs = {
  headerContainer: document.querySelector('.header-container'),
  headerNavigation: document.querySelector('.header-nav-list'),
  homeLink: document.querySelector('.header-nav-link-home'),
  shopLink: document.querySelector('.header-nav-link-shop'),
  sighUpButton: document.querySelector('.header-sigh-up-button'),
  userButton: document.querySelector('.header-user-profile-button'),
  userName: document.querySelector('.header-user-name'),
  showLogOutButton: document.querySelector('.header-triangle-icon-button'),
  logOutButton: document.querySelector('.header-log-out-button'),
  menuOpenButton: document.querySelector('.header-menu-open-button'),
  menuCloseButton: document.querySelector('.header-menu-close-button'),
};

const signUpMarkup = `<form class="authorization-form">
  <button class="authorization-button-close" type="button">
  <svg class="authorization-icon-close" width="12" height="12">
  <use href=${icon}#x-close></use></svg></button>
  <fieldset class="authorization-fieldset">
  <input class="authorization-input" type="text" name="name" maxlength="20" placeholder="Name">
  <label class="authorization-label">
  <input class="authorization-input" type="email" name="email" required placeholder="Email">
  <svg class="authorization-icon" width="18" height="18">
  <use href=${icon}#mail></use></svg>
  </label>
  <label class="authorization-label">
  <input class="authorization-input" type="password" name="password" required minlength="6" placeholder="Password" >
  <svg class="authorization-icon" width="18" height="18">
  <use href=${icon}#lock></use></svg>
  </label>
  </fieldset>
  <button class="submit-button" type="submit">Sign up</button>
  <div class="authorization-button-wrapper">
  <button class="sign-up-btn make-active" type="button">Sign up</button>
  <button class="sign-in-btn js-signin-btn" type="button">Sign in</button></div>
</form>
`;

export const instanceSignUp = basicLightbox.create(signUpMarkup, {
  className: 'authorization-lightbox',
  onClose: onInstanceSignUpClose,
});

function createInstanceSignUpRefs(i) {
  return {
    buttonClose: i.element().querySelector('.authorization-button-close'),
    iconClose: i.element().querySelector('.authorization-button-close svg'),
    form: i.element().querySelector('.authorization-form'),
    input: i.element().querySelectorAll('.authorization-input'),
    fieldset: i.element().querySelector('.authorization-fieldset'),
    submitButton: i.element().querySelector('.submit-button'),
    signUpBtn: i.element().querySelector('.sign-up-btn'),
    signInBtn: i.element().querySelector('.sign-in-btn'),
    icons: i.element().querySelectorAll('.authorization-label svg'),
  };
}

function onSingUpButtonClick() {
  instanceSignUp.show(onInstanceSignUpShow);
}

export function onInstanceSignUpShow(i) {
  function onTypeEscape(e) {
    if (e.key === 'Escape') {
      i.close(document.removeEventListener('keydown', onTypeEscape));
      console.log(555);
    }
  }
  const refsInstance = createInstanceSignUpRefs(instanceSignUp);
  menuDarkTheme(refsInstance);
  refsInstance.buttonClose.addEventListener('click', () => i.close());
  refsInstance.form.addEventListener('submit', onFormSubmit);
  refsInstance.signUpBtn.addEventListener('click', changeInstanceSingUp);
  refsInstance.signInBtn.addEventListener('click', changeInstanceSingUp);
  document.addEventListener('keydown', onTypeEscape);
}

function changeInstanceSingUp(e) {
  const refsInstance = createInstanceSignUpRefs(instanceSignUp);
  const whatNeedToDo = e.currentTarget.textContent;
  if (whatNeedToDo === 'Sign up') {
    refsInstance.submitButton.textContent = 'Sign up';
    refsInstance.signUpBtn.classList.add('make-active');
    refsInstance.signInBtn.classList.remove('make-active');
    refsInstance.fieldset.firstElementChild.classList.remove('hidden');
  } else if (whatNeedToDo === 'Sign in') {
    refsInstance.submitButton.textContent = 'Sign in';
    refsInstance.signUpBtn.classList.remove('make-active');
    refsInstance.signInBtn.classList.add('make-active');
    refsInstance.fieldset.firstElementChild.classList.add('hidden');
  }
}

function onInstanceSignUpClose(i) {
  const refsInstance = createInstanceSignUpRefs(instanceSignUp);
  refsInstance.fieldset.firstElementChild.classList.remove('hidden');
  refsInstance.signInBtn.classList.remove('make-active');
  refsInstance.signUpBtn.classList.add('make-active');

  menuSignUpButton.removeEventListener('click', onMenuSignUpButtonClick);
  menuLogoutButton.removeEventListener('click', onMenuLogOutButtonClick);
}

function showLogOutButton(e) {
  const buttonWidth = Math.round(
    e.currentTarget.parentElement.getBoundingClientRect().width
  );
  refs.logOutButton.style.width = `${buttonWidth}px`;
  refs.logOutButton.classList.toggle('log-out-visible');
}

refs.menuOpenButton.addEventListener('click', onMenuOpenButtonClick);
refs.menuCloseButton.addEventListener('click', onMenuCloseButtonClick);
refs.sighUpButton.addEventListener('click', onSingUpButtonClick);
refs.showLogOutButton.addEventListener('click', showLogOutButton);
refs.logOutButton.addEventListener('click', logout);

function menuDarkTheme(i) {
  if (mainRefs.checkbox.checked) {
    i.form.classList.add('menu-container-dark-theme');
    i.iconClose.classList.add('menu-button-close-dark-theme');
    i.input.forEach(item => {
      item.classList.add('menu-input-dark-theme');
    });
    i.icons.forEach(item => item.classList.add('menu-icon-dark-theme'));
    i.submitButton.classList.add('menu-submit-button-dark-theme');
    i.signUpBtn.classList.add('menu-signUp-signIn-button');
    i.signInBtn.classList.add('menu-signUp-signIn-button');
  } else {
    i.form.classList.remove('menu-container-dark-theme');
    i.iconClose.classList.remove('menu-button-close-dark-theme');
    i.input.forEach(item => {
      item.classList.remove('menu-input-dark-theme');
    });
    i.icons.forEach(item => item.classList.remove('menu-icon-dark-theme'));
    i.submitButton.classList.remove('menu-submit-button-dark-theme');
    i.signUpBtn.classList.remove('menu-signUp-signIn-button');
    i.signInBtn.classList.remove('menu-signUp-signIn-button');
  }
}
