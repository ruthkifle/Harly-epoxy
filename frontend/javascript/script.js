const button = document.querySelector('.button');
const menu = document.querySelector('.dropcontent');
button.addEventListener('click', () => {
    menu.classList.toggle('show');
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown')) {
        menu.classList.remove('show');
    }
});