import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
// import icon from '../img/icons.svg';
export function createIziToast(message) {
  iziToast.error({
    timeout: 10000,
    class: 'my-iziToast',
    backgroundColor: '#EF4040',
    messageColor: '#fff',
    message: message,
    position: 'topRight',
    progressBarColor: '#B51B1B;',
    transitionIn: 'bounceInLeft',
    transitionOut: 'fadeOutRight',
  });
}
