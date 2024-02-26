import { refs, instanceSignUp } from './heder';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCAn6DCGGRmtf9e6SAGV9R6e1JxRK2q4A8',
  authDomain: 'digitall-project10.firebaseapp.com',
  projectId: 'digitall-project10',
  storageBucket: 'digitall-project10.appspot.com',
  messagingSenderId: '618447253868',
  appId: '1:618447253868:web:8e9934944d76f91f920349',
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();

document.addEventListener('DOMContentLoaded', e => userIsLoggedIn()); // Видалити

export function onFormSubmit(e) {
  e.preventDefault();
  const whatNeedToDo = e.currentTarget.querySelector(
    '.authorization-button'
  ).textContent;
  const name = e.target.elements.name.value;
  const email = e.target.elements.email.value;
  const password = e.target.elements.password.value;
  if (whatNeedToDo === 'Sign up') {
    signUp(email, password, name);
  } else if (whatNeedToDo === 'Sign in') {
    signIn(email, password);
  }
  e.currentTarget.reset();
}

function signUp(email, password, name) {
  createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      const user = userCredential.user;
      updateProfile(user, { displayName: name });
      localStorage.setItem('userInfo', JSON.stringify(name));
      userIsLoggedIn();
      instanceSignUp.close();
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error);
    });
}

function signIn(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      const user = userCredential.user;
      localStorage.setItem('userInfo', JSON.stringify(user.displayName));
      userIsLoggedIn();
      instanceSignUp.close();
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

export function logout() {
  if (location.pathname.includes('shopping-list')) {
    location.pathname = '/';
  }
  localStorage.removeItem('userInfo');
  refs.logOutButton.classList.remove('log-out-visible');
  refs.sighUpButton.classList.remove('hidden');
  refs.userButton.classList.remove('visible-flex');
  refs.homeLink.classList.remove('visible-flex');
  refs.shopLink.classList.remove('visible-flex');
}

export function userIsLoggedIn() {
  if (JSON.parse(localStorage.getItem('userInfo'))) {
    refs.sighUpButton.classList.add('hidden');
    refs.userButton.classList.add('visible-flex');
    refs.homeLink.classList.add('visible-flex');
    refs.shopLink.classList.add('visible-flex');
    refs.userName.textContent = JSON.parse(localStorage.getItem('userInfo'));
  }
  return;
}
