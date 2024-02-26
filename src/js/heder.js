const signupBtn = document.querySelector('.header-sigh-up-button');
const userProfile = document.querySelector('.header-js-user-profile');
const userNameElem = document.querySelector('.js-user-name');

export function showHeaderNav() {
  userProfile.classList.remove('hidden');
  // signupBtn.classList.add('hidden');
}

export function hideHeaderNav() {
  // userProfile.classList.add('hidden');
  signupBtn.classList.remove('hidden');
}

if (localStorage.getItem('userInfo')) {
  showHeaderNav();
  const user = JSON.parse(localStorage.getItem('userInfo'));
  userNameElem.textContent = user.displayName;
}
