import { Modal } from './modal.js';
import { Form } from './form.js'

// 4 задание

const footerInner = document.querySelector('.footer-inner')
footerInner.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  console.log(data);
});


// 5 задание 

const overlayModal = new Modal('overlay');
const btnOpen = document.querySelector('.button-open')

if (btnOpen) {
  btnOpen.addEventListener('click', () => {
    console.log('Кнопка кликнута!');
    overlayModal.open();
  });
};

// 6 задание

const formFooter = new Form('form-footer')

const formElement = document.getElementById('form-footer')
formElement.addEventListener('submit', (e) => {
  e.preventDefault();

  if (formFooter.isValid()) {
    console.log(formFooter.getValues());
    formFooter.reset();
  };
});

