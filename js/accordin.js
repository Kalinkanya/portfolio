const faqTriggers = document.querySelectorAll('.faq__trigger');
const faqItems = document.querySelectorAll('.faq__accordion-item');

function closeAllAccordions() {
  faqItems.forEach(item => {
    const answer = item.querySelector('.faq__answer');
    const closedIcon = item.querySelector('.faq__trigger-closed');
    const openIcon = item.querySelector('.faq__trigger-open');
    
    answer.classList.remove('faq__answer_visible');
    
    closedIcon.classList.add('visible');
    openIcon.classList.remove('visible');
  });
}

function toggleAccordion(event) {
  const currentItem = event.currentTarget.closest('.faq__accordion-item');
  const currentAnswer = currentItem.querySelector('.faq__answer');
  const currentClosedIcon = currentItem.querySelector('.faq__trigger-closed');
  const currentOpenIcon = currentItem.querySelector('.faq__trigger-open');
  
  const isOpen = currentAnswer.classList.contains('faq__answer_visible');
  
  closeAllAccordions();
  
  if (!isOpen) {
    currentAnswer.classList.add('faq__answer_visible');
    currentClosedIcon.classList.remove('visible');
    currentOpenIcon.classList.add('visible');
  }
}

export function initAccordion() {
  faqTriggers.forEach(trigger => {
    trigger.addEventListener('click', toggleAccordion);
  });
}