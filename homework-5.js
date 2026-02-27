// Первое задание - функция принимает город и температуру и выводит сообщение 


let city = 'Medina';
let temperature = '33';

const showTemperature = (city, temperature) => {
  console.log(`Сейчас в ${city} температура — ${temperature} градусов по Цельсию`);
};

showTemperature(city,temperature);


// Второе задание - проверка скорости относительно скорости света


const lightSpeed = 299792458;

const checkSpeed = (speed) => {
  if (speed > lightSpeed) {
    return "Сверхсветовая скорость";
  } else if (speed < lightSpeed) {
    return "Субсветовая скорость";
  } else {
    return "Скорость света";
  }
};

console.log(checkSpeed(300000000));
console.log(checkSpeed(100));
console.log(checkSpeed(299792458));


// Третье задание - проверка бюджета для покупки продукта


let productName = "Парфюм аль-фарид";
let productPrice = 100;

const buyProduct = (money) => {
  if (money >= productPrice) {
    console.log(`${productName} приобретен. Спасибо за покупку!`);
  } else {
    const notEnough = productPrice - money;
    console.log(`Вам не хватает ${notEnough}$, пополните баланс`);
  }
};

buyProduct(120);
buyProduct(70);


// Четвертое задание - любая функция - развитие аналитических способностей

const sayRamadan = () => {
  console.log('Ramadan kareem bro');
};

sayRamadan();


// Пятое задание - 3 любых переменных - развитие аналитических способностей 

const directorName = 'Ilnur';
let projectName = 'IT-simulator';
let participants = 'Adults';