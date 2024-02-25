let startIndex = 0;
let isForward = true;

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
  const visibleDonations = donationData.slice(startIndex, startIndex + 6);
  const markup = donationListTemplate(visibleDonations);
  parentElement.innerHTML = markup;
}

export function toggleScrollIconDirection(iconElement) {
  isForward = !isForward;
  iconElement.style.transform = isForward ? 'rotate(0deg)' : 'rotate(180deg)';
}

export function scrollDonations(parentElement, donationData) {
  if (isForward) {
    if (startIndex + 6 < donationData.length) {
      startIndex += 3;
    } else {
      startIndex = 0;
    }
  } else {
    if (startIndex - 3 >= 0) {
      startIndex -= 3;
    } else {
      startIndex = donationData.length - 6;
    }
  }
  renderDonations(parentElement, donationData);
}
