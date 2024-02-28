import { cartRefs } from '../shopping-list';

const cartTimerWrap = document.querySelector('.cart-timer-wrap');

const createCartCountdownTimerMarkup = () => {
  return `<div class="cart-timer">
      <h3 class="cart-timer-title">
        Place your order within next 2 hours and get 10% discount!
      </h3>
      <div class="cart-timer-box">
         <div id="hours" class="cart-timer-item">
          <div class="cart-timer-circle">
            <svg class="cart-circle" viewbox="0 0 100 100">
              <linearGradient id="gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                <stop class="cart-gradient_1" offset="0%"></stop>
                <stop class="cart-gradient_2" offset="70%"></stop>
                <stop class="cart-gradient_3" offset="100%"></stop>
              </linearGradient>
              <circle class="cart-segment" r="9.55%" cx="50%" cy="50%"></circle>
            </svg>
            <div class="cart-timer-num">0</div>
          </div>
          <p class="cart-time-name">hours</p>
        </div>
         <div id="minutes" class="cart-timer-item">
          <div class="cart-timer-circle">
            <svg class="cart-circle" viewbox="0 0 100 100">
              <linearGradient id="gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                <stop class="cart-gradient_1" offset="0%"></stop>
                <stop class="cart-gradient_2" offset="70%"></stop>
                <stop class="cart-gradient_3" offset="100%"></stop>
              </linearGradient>
              <circle class="cart-segment" r="9.55%" cx="50%" cy="50%"></circle>
            </svg>
            <div class="cart-timer-num">0</div>
          </div>
          <p class="cart-time-name">minutes</p>
        </div>
         <div id="seconds" class="cart-timer-item">
          <div class="cart-timer-circle">
            <svg class="cart-circle" viewbox="0 0 100 100">
              <linearGradient id="gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                <stop class="cart-gradient_1" offset="0%"></stop>
                <stop class="cart-gradient_2" offset="70%"></stop>
                <stop class="cart-gradient_3" offset="100%"></stop>
              </linearGradient>
              <circle class="cart-segment" r="9.55%" cx="50%" cy="50%"></circle>
            </svg>
            <div class="cart-timer-num">0</div>
          </div>
          <p class="cart-time-name">seconds</p>
        </div>
      </div>
    </div>`;
};

cartTimerWrap.innerHTML = createCartCountdownTimerMarkup();

const dom = {
  hours: document.getElementById('hours'),
  minutes: document.getElementById('minutes'),
  seconds: document.getElementById('seconds'),
};

// ======= Timer only for presentation ======= //
let timerFinished = false;

const getTime = () => {
  const lsTime = localStorage.getItem('time');
  if (lsTime) {
    return lsTime;
  }
  const addTime = 10000;
  // const addTime = 1000 * 60 * 60 * 2;
  const finishedTime = Date.now() + addTime;
  localStorage.setItem('time', finishedTime);
  return finishedTime;
};

const timerInterval = setInterval(() => {
  const timeNow = Date.now();
  const timer = getTime() - timeNow;
  const formattedTime = getFormattedTime(timer);

  if (formattedTime.seconds < 0 && !timerFinished) {
    // Time is up for the first time
    clearInterval(timerInterval);
    localStorage.removeItem('time');
    timerFinished = true;

    const cartTimerWrap = document.querySelector('.cart-timer-wrap');
    if (cartTimerWrap) {
      cartTimerWrap.style.display = 'none';
    }
  }

  renderTime(formattedTime, dom);
}, 1000);

// ======= below code for timer never appear even after reloading/refreshing the page ====== //

// let timerFinished = localStorage.getItem('timerFinished') === 'true';
//
// const getTime = () => {
//   const lsTime = localStorage.getItem('time');
//   if (lsTime) {
//     return lsTime;
//   }
//   const addTime = 1000 * 60 * 60 * 2; // 2 hours in milliseconds
//   const finishedTime = Date.now() + addTime;
//   localStorage.setItem('time', finishedTime);
//   return finishedTime;
// };
//
// const timerInterval = setInterval(() => {
//   const timeNow = Date.now();
//   const timer = getTime() - timeNow;
//   const formattedTime = getFormattedTime(timer);
//
//   if (formattedTime.seconds < 0 && !timerFinished) {
//     clearInterval(timerInterval);
//     localStorage.removeItem('time');
//     timerFinished = true;
//     localStorage.setItem('timerFinished', 'true');
//   }
//
//   const cartTimerWrap = document.querySelector('.cart-timer-wrap');
//   if (cartTimerWrap) {
//     cartTimerWrap.style.display = 'none';
//   }
//
//   renderTime(formattedTime, dom);
// }, 1000);

function getFormattedTime(time) {
  const formattedTime = {
    hours: Math.floor((time % (1000 * 60 * 60 * 2)) / (1000 * 60 * 60)),
    minutes: Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((time % (1000 * 60)) / 1000),
  };
  return formattedTime;
}

function renderTime(timeData, dom) {
  Object.keys(timeData).forEach(key => {
    if (!dom[key]) return;
    dom[key].querySelector('.cart-timer-num').innerHTML = timeData[key];
    // console.log({ key, dom: dom[key] });
  });
}
