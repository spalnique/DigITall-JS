function show(element) {
  // displays an element via manipulation with classes //
}
function hide(element) {
  // hides an element via manipulation with classes //
}

// Show hide function
export function showElement(elem) {
  elem.classList.add('visible');
  elem.classList.remove('hidden');
}

export function hideElement(elem) {
  elem.classList.remove('visible');
  elem.classList.add('hidden');
}
