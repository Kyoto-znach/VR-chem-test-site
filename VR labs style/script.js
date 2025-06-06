document.addEventListener("DOMContentLoaded", () => {
  console.log("Добро пожаловать в VR Labs!");
});

window.addEventListener('scroll', function() {
    const scroll = window.scrollY;
    const bg = document.querySelector('.main_about::before');
    const mainAbout = document.querySelector('.main_about');
    if (mainAbout) {
        mainAbout.style.setProperty('--scroll', scroll * 0.3 + 'px');
    }
});