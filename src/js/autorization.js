import { refs, instanceSignUp } from './header';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { createIziToast } from './iziToast';

const firebaseConfig = {
  apiKey: 'AIzaSyCAn6DCGGRmtf9e6SAGV9R6e1JxRK2q4A8',
  authDomain: 'digitall-project10.firebaseapp.com',
  projectId: 'digitall-project10',
  storageBucket: 'digitall-project10.appspot.com',
  messagingSenderId: '618447253868',
  appId: '1:618447253868:web:8e9934944d76f91f920349',
  databaseURL: '',
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function onFormSubmit(e) {
  e.preventDefault();
  const whatNeedToDo =
    e.currentTarget.querySelector('.submit-button').textContent;
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
      isUserLoggedIn();
      instanceSignUp.close();
    })
    .catch(error => {
      if (error.code.includes('email-already-in-use')) {
        createIziToast('Email already in use');
      } else {
        createIziToast(
          'Something went wrong. Please, restart your page and try again.'
        );
      }
      console.log(error.code);
    });
}

function signIn(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      const user = userCredential.user;
      localStorage.setItem('userInfo', JSON.stringify(user.displayName));
      isUserLoggedIn();
      instanceSignUp.close();
    })
    .catch(error => {
      if (error.code.includes('invalid-credential')) {
        createIziToast('Wrong email or password');
      } else {
        createIziToast(
          'Something went wrong. Please, restart your page and try again.'
        );
      }
      console.log(error);
    });
}

export function logout() {
  if (location.pathname.includes('shopping-list')) {
    location.pathname = '/';
  }
  localStorage.removeItem('userInfo');
  refs.headerNavigation.classList.remove('visible-flex');
  refs.sighUpButton.classList.remove('hidden');
  refs.userButton.classList.remove('visible-flex');
  refs.logOutButton.classList.remove('log-out-visible');
}

export function isUserLoggedIn() {
  if (JSON.parse(localStorage.getItem('userInfo'))) {
    refs.userName.textContent = JSON.parse(localStorage.getItem('userInfo'));
    if (window.innerWidth >= 768) {
      refs.headerNavigation.classList.add('visible-flex');
      refs.sighUpButton.classList.add('hidden');
      refs.userButton.classList.add('visible-flex');
    }
  }
  return;
}
