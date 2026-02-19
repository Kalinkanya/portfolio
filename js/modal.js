const openModalButtons = document.querySelectorAll('[data-modal-open]');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.modal__close');
const body = document.querySelector('body')

function toggleModal() {
  overlay.classList.toggle('visible');
  modal.classList.toggle('visible');
  body.classList.toggle('no-scroll');
}

export function initModal() {
  openModalButtons.forEach((btn) => {
    btn.addEventListener('click', toggleModal);
  });

  overlay.addEventListener('click', toggleModal);
  closeBtn.addEventListener('click', toggleModal);
}