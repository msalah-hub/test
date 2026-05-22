import { Modal } from './modal.js';
import { Form } from './form.js'

// 4 задание

const footerForm = new Form('form-in');

footerForm.formElement.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = footerForm.getValues();
  console.log(data);
})

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

  if (!formFooter.isValid()) {
    alert('Форма заполнена неверно.');
    return;
  };
  const data = formFooter.getValues();

  if(data.password !== data.passwordConfirm) {
    alert('Пароли не совпадают!')
    return;
  }


  const user = formFooter.getValues();
  user.createdOn = new Date().toISOString();
  
  console.log("Ты успешно зарегистрировался, твои данные:", user);
  formFooter.reset();
});

