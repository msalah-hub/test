import { products } from './products.js';


const productTemplate = document.querySelector('#product-template')
const productList = document.querySelector('#product-list')


function renderCards(arr) {
  arr.forEach(product =>{
    const productClone = productTemplate.content.cloneNode(true);

    productClone.querySelector('.product-name').textContent = product.name;
    productClone.querySelector('.product-description').textContent = product.description;
    productClone.querySelector('.product-price').textContent = product.price;
    productClone.querySelector('.product-category').textContent = product.category;
    productClone.querySelector('.product-rating').textContent = product.rating;
    productClone.querySelector('.product-inStock').textContent = product.inStock;
    productList.appendChild(productClone);
  });
};


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
renderCards(products.slice(0, count));

