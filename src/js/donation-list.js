import { refs } from './refs';
import { renderDonations } from './createMarkups';
import actAgainstHunger from '../img/new_png/act-against-hunger.png';
import intMedCorps from '../img/new_png/int-med-corps.png';
import msf from '../img/new_png/msf.png';
import projectHope from '../img/new_png/project-hope.png';
import prytula from '../img/new_png/prytula.png';
import razom from '../img/new_png/razom.png';
import saveTheChildren from '../img/new_png/save-the-children.png';
import united24 from '../img/new_png/united24.png';
import worldVision from '../img/new_png/world-vision.png';
const donation = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: actAgainstHunger,
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: projectHope,
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: intMedCorps,
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: razom,
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: actAgainstHunger,
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: prytula,
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: msf,
  },

  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: worldVision,
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: united24,
  },
];

renderDonations(refs.donationListElement, donation);

// function scrollToHeight(elem, e) {
//   if (e.currentTarget.style.transform === 'rotate(0deg)') {
//     let onceScroll = +(elem.scrollHeight / elem.children.length).toFixed(2);
//     elem.scrollTop += onceScroll;
//     elem.scrollTo({ top: elem.scrollTop, behavior: 'smooth' });
//     if (elem.scrollTop === elem.scrollHeight - elem.clientHeight) {
//       e.currentTarget.style.transform = 'rotate(180deg)';
//     }
//   } else if (e.currentTarget.style.transform === 'rotate(180deg)') {
//     elem.scrollTo({ top: 0, behavior: 'smooth' });
//   }
// }
// const scrollToHeightBound = scrollToHeight.bind(null, refs.donationListElement);

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

// refs.scrollButton.addEventListener('click', scrollToHeightBound);
refs.donationListElement.addEventListener('scroll', onScrollDonationList);

let scrollDir = true;
refs.scrollButton.style.alignSelf = 'center';
refs.scrollButton.style.transition = 'transform 250ms ease-in-out 250ms';

function scrollOnClick() {
  const maxScroll =
    refs.donationListElement.scrollHeight -
    refs.donationListElement.clientHeight;
  refs.donationListElement.scroll({
    top: scrollDir ? maxScroll : 0,
    behavior: 'smooth',
  });
  scrollDir
    ? (refs.scrollButton.style.transform = 'rotate(180deg)')
    : (refs.scrollButton.style.transform = 'rotate(0deg)');
  scrollDir = !scrollDir;
}

function autoScroll() {
  intervalID = setInterval(() => {
    scrolltop = refs.donationListElement.scrollTop;
    refs.donationListElement.scrollTop += scrollDir ? 1 : -1;
    scrollDir =
      scrolltop === refs.donationListElement.scrollTop ? !scrollDir : scrollDir;
  }, 50);
}

let scrolltop;
let intervalID;
let timeoutID;
autoScroll();

refs.scrollButton.addEventListener('click', () => {
  if (intervalID) clearInterval(intervalID);
  if (timeoutID) clearTimeout(timeoutID);
  scrollOnClick();
  timeoutID = setTimeout(() => {
    autoScroll();
  }, 3000);
});
