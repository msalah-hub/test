// Покраска первой карточки

const recolorFirstCardButton = document.getElementById('recolor-first-card-button');
const firstProductCard = document.querySelector('.product-card');
const grayHashColor = '#1c1a1a90';

recolorFirstCardButton.addEventListener('click', () => {
  firstProductCard.style.backgroundColor = grayHashColor;
})

// Покраска всех карточек

const productCards = document.querySelectorAll('.product-card');
const greenHashColor = '#39db4e';
const recolorAllCardButton = document.getElementById('recolor-all-card-button');

recolorAllCardButton.addEventListener('click', () => {
  productCards.forEach(
    card => card.style.backgroundColor = greenHashColor);
});

// Переход на страницу Google

const googleOpenButton = document.getElementById('open-google-button');
googleOpenButton.addEventListener('click', openGoogle);

function openGoogle() {
  const answer = confirm('Вы действительно хотите перейти на сайт Google');

  if (answer === true) {
    window.open('https://google.com');
  } else {
    console.log('Пользователь не в настроении');
  }
}

// Переключатель цвета кнопки 

const button = document.getElementById('recolor-button');
button.addEventListener('click', () => {
  button.classList.toggle('active-green');
});

// Вывод заголовка страницы на консоль

const tittle = document.querySelector('.tittle');
tittle.addEventListener('mouseover', () => {
  console.log(tittle.textContent);
});
