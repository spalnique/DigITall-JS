import iziToast from 'izitoast';

const STORAGE_KEY = 'footer-input';

const form = document.querySelector('.footer-form');

form.addEventListener('input', () => {
  const userEmail = form.elements.email.value;

  const data = {
    email: userEmail,
  };

  saveToLS(STORAGE_KEY, data);
});

form.addEventListener('submit', e => {
  e.preventDefault();

  // валідація поля email
  const userEmail = form.elements.email.value;
  if (userEmail.trim() === '') {
    iziToast.show({
      message: `Введіть e-mail`,
      messageColor: '#FFFFFF',
      backgroundColor: '#59A10D',
      position: 'center',
    });
    return;
  }
  // ====================

  const data = loadFromLS(STORAGE_KEY) || {};
  console.log(data);

  localStorage.removeItem(STORAGE_KEY);
  form.reset();
});

function loadFromLS(key = 'empty') {
  const data = localStorage.getItem(key);
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
  const data = loadFromLS(STORAGE_KEY) || {};
  form.elements.email.value = data.email || '';
}

restoreData();
