export function createParentMarkup(data, childElemMarkupFn) {
  const parentElementMarkup = data.map(x => childElemMarkupFn(x)).join('');
  return parentElementMarkup;
}
