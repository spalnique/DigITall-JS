import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import icon from '../img/icons.svg';
import { logout, onFormSubmit } from './autorization';

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
};

const signUpMarkup = `<form class="authorization-form">
  <button class="authorization-button-close" type="button">
  <svg class="authorization-icon-close" width="12" height="12">
  <use href=${icon}#x-close></use></svg></button>
  <fieldset class="authorization-fieldset">
  <input class="authorization-input" type="text" name="name" maxlength="10" placeholder="Name">
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
  <button class="authorization-button" type="submit">Sign up</button>
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
    form: i.element().querySelector('.authorization-form'),
    fieldset: i.element().querySelector('.authorization-fieldset'),
    submitButton: i.element().querySelector('.authorization-button'),
    signUpBtn: i.element().querySelector('.sign-up-btn'),
    signInBtn: i.element().querySelector('.sign-in-btn'),
  };
}

function onSingUpButtonClick() {
  instanceSignUp.show(onInstanceSignUpShow);
}

function onInstanceSignUpShow(i) {
  const refsInstance = createInstanceSignUpRefs(instanceSignUp);
  refsInstance.buttonClose.addEventListener('click', () => i.close());
  refsInstance.form.addEventListener('submit', onFormSubmit);
  refsInstance.signUpBtn.addEventListener('click', changeInstanceSingUp);
  refsInstance.signInBtn.addEventListener('click', changeInstanceSingUp);
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
}
function showLogOutButton(e) {
  const buttonWidth = Math.round(
    e.currentTarget.parentElement.getBoundingClientRect().width
  );
  refs.logOutButton.style.width = `${buttonWidth}px`;
  refs.logOutButton.classList.toggle('log-out-visible');
}

refs.menuOpenButton.addEventListener('click', e => {
  if (!JSON.parse(localStorage.getItem('userInfo'))) {
    onSingUpButtonClick();
  } else {
    console.log('Show modal window');
  }
});
refs.sighUpButton.addEventListener('click', onSingUpButtonClick);
refs.showLogOutButton.addEventListener('click', showLogOutButton);
refs.logOutButton.addEventListener('click', logout);
