var nav = document.querySelector('nav');
window.addEventListener('scroll', function () {
    if (window.scrollY > 120) {
        nav.style.top = '0';
    }
    else {
        nav.style.top = '-80px';
    }
});
