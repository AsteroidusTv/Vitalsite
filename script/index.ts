const nav = document.querySelector('nav') as HTMLElement;

window.addEventListener('scroll', () => {
  if (window.scrollY > 120) {
    nav.style.top = '0';
  } else {
    nav.style.top = '-80px';
  }
});
