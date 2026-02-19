const leftZone = document.querySelector('.portfolio__left-zone');
const rightZone = document.querySelector('.portfolio__right-zone');
const centerZone = document.querySelector('.portfolio__center-zone');
const sliderWrapper = document.querySelector('.portfolio__slider-wrapper');

function stopSlide() {
  const newLeft = getComputedStyle(sliderWrapper).left;
  const newTransform = getComputedStyle(sliderWrapper).transform;
  sliderWrapper.style.left = newLeft;
  sliderWrapper.style.transform = newTransform;
}

function slideRight() {
  sliderWrapper.style.left = '';
  sliderWrapper.style.transform = '';
  
  if (sliderWrapper.classList.contains('portfolio__slider-wrapper_center')) {
    sliderWrapper.classList.replace('portfolio__slider-wrapper_center', 'portfolio__slider-wrapper_end');
  } else if (!sliderWrapper.classList.contains('portfolio__slider-wrapper_end')) {
    sliderWrapper.classList.add('portfolio__slider-wrapper_end');
  }
}

function slideLeft() {
  sliderWrapper.style.left = '';
  sliderWrapper.style.transform = '';
  
  if (sliderWrapper.classList.contains('portfolio__slider-wrapper_end')) {
    sliderWrapper.classList.replace('portfolio__slider-wrapper_end', 'portfolio__slider-wrapper_center');
  } else if (sliderWrapper.classList.contains('portfolio__slider-wrapper_center')) {
    sliderWrapper.classList.remove('portfolio__slider-wrapper_center');
  }
}

export function initSlider() {
  rightZone.addEventListener('mouseenter', slideRight);
  rightZone.addEventListener('touchmove', slideRight);
  rightZone.addEventListener('mouseleave', stopSlide);

  leftZone.addEventListener('mouseenter', slideLeft);
  leftZone.addEventListener('touchmove', slideLeft);
  leftZone.addEventListener('mouseleave', stopSlide);

  centerZone.addEventListener('touchstart', stopSlide);
  centerZone.addEventListener('mousedown', stopSlide);
}