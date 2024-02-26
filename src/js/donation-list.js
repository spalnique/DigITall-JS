import { refs } from './refs';
import { renderDonations } from './createMarkups';
import actAgainstHunger from '../img/new_png/act-against-hunger.png';
const donation = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: actAgainstHunger,
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

function scrollToHeight(elem, e) {
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
const scrollToHeightBound = scrollToHeight.bind(null, refs.donationListElement);

function onScrollDonationList(e) {
  if (
    e.currentTarget.scrollTop >
    e.currentTarget.scrollHeight - e.currentTarget.clientHeight
  ) {
    e.currentTarget.nextElementSibling.style.transform = 'rotate(180deg)';
  } else if (e.currentTarget.scrollTop === 0) {
    e.currentTarget.nextElementSibling.style.transform = 'rotate(0deg)';
  }
}

refs.scrollButton.addEventListener('click', scrollToHeightBound);
refs.donationListElement.addEventListener('scroll', onScrollDonationList);
