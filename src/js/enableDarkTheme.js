

let container = document.querySelector('body');
let toggler = document.querySelector('#themeToggle');

toggler.addEventListener('click', toggleDarkTheme);

function toggleDarkTheme(){
    let classList = container.classList;
    toggler.checked ? classList.add('dark-theme') : classList.remove('dark-theme');
}


