// =======================
const buttonUp = document.querySelector('.button-up');

buttonUp.addEventListener('click', scrollOnClick);
function scrollOnClick() {
  window.scrollTo({
    top: 0,
    behavior: "smooth" 
  });
}