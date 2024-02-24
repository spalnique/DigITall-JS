const btnHome = document.querySelector('.home-js');
const btnShopping = document.querySelector('.shopping-js');
const signupBtn = document.querySelector('.signup-js');
const userProfile = document.querySelector('.js-user-profile');
const userNameElem = document.querySelector('.js-user-name');

export function showHeaderNav(){
    btnHome.classList.remove('hidden');
    btnShopping.classList.remove('hidden');
    userProfile.classList.remove('hidden');
    signupBtn.classList.add('hidden');
}

export function hideHeaderNav(){
    btnHome.classList.add('hidden');
    btnShopping.classList.add('hidden');
    userProfile.classList.add('hidden');
    signupBtn.classList.remove('hidden');
}

if (localStorage.getItem('userInfo')){
    showHeaderNav();
const user = JSON.parse(localStorage.getItem('userInfo'));
userNameElem.textContent = user.displayName;
}