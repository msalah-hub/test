import { products } from './products.js';


const productTemplate = document.querySelector('#product-template')
const productList = document.querySelector('#product-list')


function renderCards(count) {
  const cards = document.querySelectorAll('.product-card');
  cards.forEach((card, index) => {
    if (index < count) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}



// 4 задание 

const result = products.reduce((acc, product) => {
  acc[product.name] = product.description
  return acc;
}, {})

console.log(result);


// 5 задание 


function getCount() {
  const count = Number(prompt("Сколько карточек отобразить? От 1 до 5"));
  if (count >= 1 && count <= 5)
    return count
  else {
    alert('Вы ввели неверное число');
    return getCount();
  }
};


const count = getCount();
renderCards(count);

