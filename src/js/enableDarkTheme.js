document.addEventListener('DOMContentLoaded', function() {
    let container = document.querySelector('body');
    let toggler = document.querySelector('#themeToggle');

    let savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        container.classList.add(savedTheme);
        toggler.checked = (savedTheme === 'dark-theme');
    }

    toggler.addEventListener('click', toggleDarkTheme);

    function toggleDarkTheme(){
        let classList = container.classList;
        if (toggler.checked) {
            classList.add('dark-theme');
            localStorage.setItem('theme', 'dark-theme');
        } else {
            classList.remove('dark-theme');
            localStorage.removeItem('theme');
        }
    }
});