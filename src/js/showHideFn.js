export function showElement(elem) {
  elem.classList.add('visible');
  elem.classList.remove('hidden');
}

export function hideElement(elem) {
  elem.classList.remove('visible');
  elem.classList.add('hidden');
}

export function setActivePage(className) {
  document.querySelector('.' + className).classList.add('make-yellow');
}
