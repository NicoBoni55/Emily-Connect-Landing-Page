document.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const body = document.body;

    if (scrollPosition % 1000 < 400) {
        body.classList.remove('background2');
        body.classList.add('background1');
    } else {
        body.classList.remove('background1');
        body.classList.add('background2');
    }
});