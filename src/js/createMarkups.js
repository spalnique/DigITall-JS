let startIndex = 0;

export function createButton(
  className,
  textContent,
  datasetCategory = '',
  datasetAction = '',
  datasetID = ''
) {
  return `<button type="button" class="${className}" data-category = "${datasetCategory}" data-action = "${datasetAction}" data-id = "${datasetID}">${textContent}</button>`;
}

export function createCategoryMarkup(data, bookMarkupFn) {
  const innerMarkup = data.map(x => bookMarkupFn(x)).join('');
  const categoryMarkup = `<ul class="main-category-list">${innerMarkup}</ul>`;
  return categoryMarkup;
}

export function createBookMarkup(data) {
  return `<li class="main-category-item" data-id="${data._id}">
    <img class="main-category-img" src="${data.book_image}"
      alt="${data.title}"
      width="${data.book_image_width}"
      height="${data.book_image_height}" data-id="${data._id}">
<div class="main-category-text-wrapper" data-id="${data._id}">
  <h3 class="main-category-title" data-id="${data._id}">${data.title}</h3>
  <p class="main-category-author" data-id="${data._id}">${data.author}</p>
</div>
<p class="main-category-item-overlay" data-id="${data._id}" data-action="open-modal">quick view</p>
</li>`;
}

export function renderContent(parentElement, markup, listenerCallbackFn) {
  parentElement.innerHTML = markup;
  const catList = document.querySelectorAll('.main-category-list');
  catList.forEach(x => {
    x.addEventListener('click', listenerCallbackFn);
  });
}

function donationTemplate(donation, index) {
  return `<li class="sidebar-donation-list-name">
                <p class="sidebar-donation-name-number">${(index + 1)
                  .toString()
                  .padStart(2, 0)}</p>
                <a
                  class="sidebar-donation-name-link"
                  href="${donation.url}"
                  target="_blank"
                  ><img
                    class="sidebar-donation-name-logo"
                    src="${donation.img}"
                    alt="${donation.title}"
                  />
                </a>
              </li>`;
}

function donationListTemplate(data) {
  return data
    .map((donation, index) => donationTemplate(donation, index + startIndex))
    .join('');
}

export function renderDonations(parentElement, donationData) {
  const markup = donationListTemplate(donationData);
  parentElement.innerHTML = markup;
}

export function renderLoader(parentElement) {
  parentElement.innerHTML =
    '<div style="scale: 0.5; padding-top: 150px; display: flex; width:100%; justify-content: center; align-items:center;"><span class="loader"></span></div>';
}
