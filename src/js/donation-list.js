// const foundations = [
//   {
//     title: 'Save the Children',
//     url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
//     img: null,
//   },
//   {
//     title: 'Project HOPE',
//     url: 'https://www.projecthope.org/country/ukraine/',
//     img: null,
//   },
//   {
//     title: 'UNITED24',
//     url: 'https://u24.gov.ua/uk',
//     img: null,
//   },
//   {
//     title: 'International Medical Corps',
//     url: 'https://internationalmedicalcorps.org/country/ukraine/',
//     img: null,
//   },
//   {
//     title: 'Medicins Sans Frontieres',
//     url: 'https://www.msf.org/ukraine',
//     img: null,
//   },
//   {
//     title: 'RAZOM',
//     url: 'https://www.razomforukraine.org/',
//     img: null,
//   },
//   {
//     title: 'Action against hunger',
//     url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
//     img: null,
//   },
//   {
//     title: 'World vision',
//     url: 'https://www.wvi.org/emergencies/ukraine',
//     img: null,
//   },
//   {
//     title: 'Serhiy Prytula Charity Foundation',
//     url: 'https://prytulafoundation.org/en',
//     img: null,
//   },
// ];

// const donationContainerEl = document.querySelector('.donation-container');
// console.log(donationContainerEl);

// const donationContainerMarkup = foundations
//   .map(
//     (foundation, index) =>
//       `<li class="donation-item">
//           <a class="donation-link" href="${foundation.url}" target="_blank">
//             <span class="donation-number">${(index + 1)
//               .toString()
//               .padStart(2, '0')}</span>
//             <img class="donation-image" src="${foundation.img}" alt="" />
//             <p class="donation-title">${foundation.title}</p>
//           </a>
//         </li>`
//   )
//   .join('');

// donationContainerEl.insertAdjacentHTML('beforeend', donationContainerMarkup);
