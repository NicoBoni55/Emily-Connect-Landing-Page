document.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const body = document.body;

    if (scrollPosition % 2000 < 500) {
        body.classList.remove('background2');
        body.classList.add('background1');
    } else {
        body.classList.remove('background1');
        body.classList.add('background2');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });
});