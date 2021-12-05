const burger = document.querySelector('.burger_menu');
const nav = document.querySelector('.menu_items');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav_active');
    burger.classList.toggle('change');
})