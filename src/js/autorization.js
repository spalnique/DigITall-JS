import * as basicLightbox from 'basiclightbox';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword} from 'firebase/auth';
import {showHeaderNav, hideHeaderNav} from './heder';


const firebaseConfig = {
  apiKey: 'AIzaSyCAn6DCGGRmtf9e6SAGV9R6e1JxRK2q4A8',
  authDomain: 'digitall-project10.firebaseapp.com',
  projectId: 'digitall-project10',
  storageBucket: 'digitall-project10.appspot.com',
  messagingSenderId: '618447253868',
  appId: '1:618447253868:web:8e9934944d76f91f920349',
};

const btnLogout =  document.querySelector('.js-user-profile');
const userNameElem = document.querySelector('.js-user-name');
const button = document.querySelector('.signup-js');
const app = initializeApp(firebaseConfig);
const auth = getAuth();


button.addEventListener('click', onButtonClick);

function onButtonClick() {
  instanceSignUp.show();
  //instanceSignIn.show();
}

const instanceSignUp = basicLightbox.create(
  `
<div class="authorization">
<form class="autorization-form">
  <input type="text" name="name" required>
  <input type="email" name="email" required>
  <input type="password" name="password" required minlength="6" >
  <button class="form-button" >Sign up

  </button>
</form>
<button class="sign-up-btn">Sign Up</button>
<button class="sign-in-btn js-signin-btn">Sign in</button>
</div>
`,
  {
    onShow: instance => {
      instance.element().querySelector('form').addEventListener('submit', onFormSubmit)
      instance.element().querySelector('.js-signin-btn').addEventListener('click', instanceSignIn.show)
      instanceSignIn.close();
    },
  }
);

const instanceSignIn = basicLightbox.create(
    `
  <div class="authorization">
  <form class="autorization-form">
    
    <input type="email" name="email" required>
    <input type="password" name="password" required minlength="6" >
    <button class="form-button js-signup-btn">Sign in
    </button>
  </form>
  <button class="js-btn-signup">Sign Up</button>
  </div>
  `,
    {
      onShow: instance => {
        instance.element().querySelector('form').addEventListener('submit', onSignIn)
        instance.element().querySelector('.js-btn-signup').addEventListener('click', instanceSignUp.show)
        instanceSignUp.close();
      },
    }
  );

function onSignIn(e){
    e.preventDefault();
    let email = e.target.elements.email.value;
    let password = e.target.elements.password.value;

    signIn(email, password);
    e.target.reset();
}



function signUp(email, password, name) {
  createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      // Signed up
      const user = userCredential.user;
      updateProfile(user, {displayName: name});
      showHeaderNav();
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
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    userNameElem.textContent = user.displayName;
    showHeaderNav();
    instanceSignIn.close();
    localStorage.setItem('userInfo', JSON.stringify(user));
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  }

function onFormSubmit(e){
    e.preventDefault();
    let email = e.target.elements.email.value;
    let name = e.target.elements.name.value;
    let password = e.target.elements.password.value;

    signUp(email, password, name);
    e.target.reset();
    userNameElem.textContent = name;
}

// ------LOG OUT----------//
function logout(){
    hideHeaderNav();

    if (location.pathname.includes('shopping-list')){
        location.pathname = '/';
    }
localStorage.removeItem('userInfo');
}

btnLogout.addEventListener('click', logout);


