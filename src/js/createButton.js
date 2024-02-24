export function createButton(
  className,
  textContent,
  datasetCategory = '',
  datasetAction = '',
  datasetID = ''
) {
  return `<button type="button" class="${className}" data-category = "${datasetCategory}" data-action = "${datasetAction}" data-id = "${datasetID}">${textContent}</button>`;
}
