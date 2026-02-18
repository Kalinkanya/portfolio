const scroll_down = document.querySelector('.hero__scroll-down');
const aboutme = document.getElementById('aboutme');

function scrollToAbout() {
    aboutme.scrollIntoView({
        behavior: 'smooth'
    });
};

export function initScrollDown() {
  scroll_down.addEventListener('click', scrollToAbout);
}
