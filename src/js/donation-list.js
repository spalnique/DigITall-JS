let startIndex = 0;
let isForward = true;

const testBtn = document.querySelector('.sidebar-scroll-btn');
const donationList = document.querySelector('.sidebar-donation-list');

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

export function toggleScrollIconDirection(iconElement) {
  // isForward = !isForward;
  // iconElement.style.transform = isForward ? 'rotate(0deg)' : 'rotate(180deg)';
}

export function scrollDonations(parentElement, donationData) {
  // if (isForward) {
  //   if (startIndex + 6 < donationData.length) {
  //     startIndex += 3;
  //   } else {
  //     startIndex = 0;
  //   }
  // } else {
  //   if (startIndex - 3 >= 0) {
  //     startIndex -= 3;
  //   } else {
  //     startIndex = donationData.length - 6;
  //   }
  // }
  // renderDonations(parentElement, donationData);
}

function onScrollDonationList(e) {
  if (
    e.currentTarget.scrollTop ===
    e.currentTarget.scrollHeight - e.currentTarget.clientHeight
  ) {
    e.currentTarget.nextElementSibling.style.transform = 'rotate(180deg)';
  } else if (e.currentTarget.scrollTop === 0) {
    e.currentTarget.nextElementSibling.style.transform = 'rotate(0deg)';
  }
}

donationList.addEventListener('scroll', onScrollDonationList);

export function scrollToHeight(elem, e) {
  if (e.currentTarget.style.transform === 'rotate(0deg)') {
    let onceScroll = +(elem.scrollHeight / elem.children.length).toFixed(2);
    elem.scrollTop += onceScroll;
    elem.scrollTo({ top: elem.scrollTop, behavior: 'smooth' });
    if (elem.scrollTop === elem.scrollHeight - elem.clientHeight) {
      e.currentTarget.style.transform = 'rotate(180deg)';
    }
  } else if (e.currentTarget.style.transform === 'rotate(180deg)') {
    elem.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
export const scrollToHeightBound = scrollToHeight.bind(null, donationList);
testBtn.addEventListener('click', scrollToHeightBound);
