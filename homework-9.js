
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

const btnOpen = document.querySelector('.button-open')
const overlayOpen = document.querySelector('.overlay')
const btnClose = document.querySelector('.modal-close')

btnOpen.addEventListener('click', (event) => {
  overlayOpen.classList.add('modal-showed');
});

btnClose.addEventListener('click', (event) => {
  overlayOpen.classList.remove('modal-showed');
});


