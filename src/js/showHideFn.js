export function showElement(elem) {
  elem.classList.add('visible');
  elem.classList.remove('hidden');
}

export function hideElement(elem) {
  elem.classList.remove('visible');
  elem.classList.add('hidden');
}
