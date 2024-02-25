import { refs } from './refs';
import { renderDonations } from './createMarkups';

const donation = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: './img/new_png/save-the-children.png',
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: './img/new_png/project-hope.png',
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: './img/new_png/int-med-corps.png',
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: './img/new_png/razom.png',
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: './img/new_png/act-against-hunger.png',
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: './img/new_png/prytula.png',
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: './img/new_png/msf.png',
  },

  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: './img/new_png/world-vision.png',
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: './img/new_png/united24.png',
  },
];

renderDonations(refs.donationListElement, donation);

refs.scrollButton.addEventListener('click', () => {
  scrollDonations(refs.donationListElement, donation);
  toggleScrollIconDirection(refs.arrowIcon);
});

function toggleScrollIconDirection(iconElement) {
  isForward = !isForward;
  iconElement.style.transform = isForward ? 'rotate(0deg)' : 'rotate(180deg)';
}

function scrollDonations(parentElement, donationData) {
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
