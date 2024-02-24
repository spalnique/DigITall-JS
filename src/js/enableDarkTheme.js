

let hederContainer = document.querySelector('.header-container');
let toggler = document.querySelector('#themeToggle');

toggler.addEventListener('click', toggleDarkTheme);

function toggleDarkTheme(){
    let classList = hederContainer.classList;
    toggler.checked ? classList.add('dark-theme') : classList.remove('dark-theme');
}


