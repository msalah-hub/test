import { products } from './products.js';


const productTemplate = document.querySelector('#product-template');
const productList = document.querySelector('#product-list');



// 4 задание 


const cardDescription = products.reduce((acc, item) => {
  acc.push({ [item.name]: item.description })
  return acc;
}, []);


// 5 задание 


function getCount() {
  const count = prompt("Сколько карточек отобразить? От 1 до 5");

  if (count < 1 || count > 5 || isNaN(count)) {
    alert("Введи число от 1 до 5!");
    return 1;
  };
  return Number(count);
};

function renderCards(array) {
  array.forEach((item) => {
    const productClone = productTemplate.content.cloneNode(true)
    productClone.querySelector('.product-card-img').src = item.image
    productClone.querySelector('.product-card__for-skin').textContent = item.category
    productClone.querySelector('.product-card__tittle').textContent = item.name
    productClone.querySelector('.product-card__descr').textContent = item.description
    productClone.querySelector('.product-card__price').textContent = item.price + ' ₽'

    const compList = productClone.querySelector('.product-card__composition')
    item.composition.forEach(c => {
      const li = document.createElement('li')
      li.textContent = c
      compList.appendChild(li)
    })

    productList.appendChild(productClone)
  });
};

const count = getCount();
const slicedProducts = products.slice(0, count);
renderCards(slicedProducts);

