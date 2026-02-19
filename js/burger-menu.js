const burger = document.querySelector('.header__burger');
const burger_line_top = document.querySelector('.burger__line-top');
const burger_line_bottom = document.querySelector('.burger__line-bottom');
const burger_menu = document.querySelector('.header__burger-menu');
const burgerLinks = document.querySelectorAll('.header__burger-link');
const body = document.querySelector('body');

function toggleMenu() {
  burger_line_top.classList.toggle('burger__line-top--open');
  burger_line_bottom.classList.toggle('burger__line-bottom--open');
  burger_menu.classList.toggle('header__burger-menu--open');
  body.classList.toggle('no-scroll');
};

export function initBurgerMenu() {
  burger.addEventListener('click', toggleMenu);
  burgerLinks.forEach((el) => {
    el.addEventListener("click", toggleMenu);
  });
}
