import iziToast from 'izitoast';

const STORAGE_KEY = 'mailing-list';
const LAST_INPUT = 'input-last-value';

const form = document.querySelector('.footer-form');

function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}
const saveToLSdebounced = debounce(function () {
  const userEmail = form.elements.email.value;
  saveToLS(LAST_INPUT, userEmail);
}, 500);

form.addEventListener('input', saveToLSdebounced);

form.addEventListener('submit', e => {
  e.preventDefault();

  // валідація поля email
  const userEmail = form.elements.email.value;
  if (userEmail.trim() === '') {
    iziToast.show({
      message: `Введіть e-mail`,
      messageColor: '#FFFFFF',
      backgroundColor: '#59A10D',
      position: 'topRight',
    });
    return;
  }
  // ====================

  const data = loadFromLS(STORAGE_KEY) || [];
  data.push(form.elements.email.value);
  saveToLS(STORAGE_KEY, data);
  form.reset();
});

function loadFromLS(key) {
  const data = localStorage.getItem(key);
  console.log(data);
  if (!data) return;
  try {
    const result = JSON.parse(data);
    return result;
  } catch {
    return data;
  }
}

function saveToLS(key, value) {
  const jsonData = JSON.stringify(value);
  localStorage.setItem(key, jsonData);
}

function restoreData() {
  const data = loadFromLS(LAST_INPUT) || '';
  form.elements.email.value = data;
}

restoreData();
loadFromLS(STORAGE_KEY);
