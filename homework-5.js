// Первое задание - город и температура 


let city = 'Medina';
let temperatureInTheCity = '33';

console.log(`Сейчас в ${city} температура — ${temperatureInTheCity} градусов по Цельсию`);


// Второе задание - скорость света


const speedOfLight = 299792458;

const checkSpeed = (speed) => {
  if (speed > speedOfLight) {
    return "Сверхсветовая скорость";
  } else if (speed < speedOfLight) {
    return "Субсветовая скорость";
  } else {
    return "Скорость света";
  }
};

console.log(checkSpeed(300000000));
console.log(checkSpeed(100));
console.log(checkSpeed(299792458));


// Третье задание - продукт и цена


let nameOfProduct = "Парфюм аль-фарид";
let priceOfProduct = 100;

const checkPrice = (money) => {
  if (money >= priceOfProduct) {
    console.log(`${nameOfProduct} приобретен`);
  } else {
    let notEnough = priceOfProduct - money;
    console.log(`Вам не хватает ${notEnough}$, пополните баланс`);
  }
};

checkPrice(120);
checkPrice(70);


// Четвертое задание - развитие аналитических способностей

const sayRamadan = () => {
  console.log('Ramadan kareem bro');
};

sayRamadan();


// Пятое задание - развитие аналитических способностей 

const directorName = 'Ilnur';
let projectName = 'IT-simulator';
let participants = 'Adults';