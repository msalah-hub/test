// Первое задани - Данные о человеке


const person = {
  name: "Muhammad",
  surname: "Salah",
  age: 21,
  job: "Developer",
  country: "UAE",
  city: "Dubai",
  relationshipStatus: "not married",
  studies: "Frontend-Angular developer"
};


// Второе задание - Объект содержащий данные об автомобиле 


const userCar = {
  brand: "Chevrolet",
  model: "Camaro",
  year: 2018,
  color: "Yellow",
  transmission: "automatic",
};

userCar.person = person
console.log(userCar);


// Третье задание - добавление максимальной скорости в случае если такого нет в объекте


const addMaxSpeed = () => {
  if ("max speed" in userCar) {
    console.log("Максимальная скорость уже есть - это же камаро");
    return;
  }
  else {
    userCar["max speed"] = 280;
    console.log("Максимальная скорость добавлена");
  } 
};

addMaxSpeed();


// Четвертое задание - функция вывода значения свойства объекта по ключу


const showValue = (obj, key) => {
  console.log(obj[key]);
};

showValue(userCar, "model");


// Пятое задание - массив с названиями продуктов


const nameProducts = ["laptop", "smartphone", "notebook"];


// Шестое задание - массив объектов (книги) и добавление новой книги


const books = [
 {
  title: "Не грусти (La tahzan)",
  author: "Аид Аль-Карни",
  year: 2003,
  coverColor: "Gold",
  genre: "Саморазвитие"
 },
 {
  title: "Жизнь Пророка (Ар-Рахик аль-Махтум)",
  author: "Сафи ар-Рахман аль-Мубаракфури",
  year: 1976,
  coverColor: "Зеленый",
  genre: "Биография / История"
 },
 {
  title: "Преступление и наказание",
  author: "Федор Достоевский",
  year: 1866,
  coverColor: "Темно-синий",
  genre: "Психологический роман"
 },
 {
  title: "Маленький принц",
  author: "Антуан де Сент-Экзюпери",
  year: 1943,
  coverColor: "Желтый",
  genre: "Сказка-притча"
 },
 {
  title: "Приключения Шерлока Холмса",
  author: "Артур Конан Дойл",
  year: 1892,
  coverColor: "Синий",
  genre: "Детектив"
 }
]

books.push(
{
  title: "Гарри Поттер и философский камень",
  author: "Джоан Роулинг",
  year: 1997,
  coverColor: "Фиолетовый",
  genre: "Фэнтези"
}
);

console.log(books);

// Седьмое задание - объединение двух массивов книг в один



const islamicBooks = [
{
  title: "Не грусти (La tahzan)",
  author: "Аид Аль-Карни",
  year: 2003,
  coverColor: "Золотой",
  genre: "Саморазвитие"
},
{
  title: "Жизнь Пророка (Ар-Рахик аль-Махтум)",
  author: "Сафи ар-Рахман аль-Мубаракфури",
  year: 1976,
  coverColor: "Зеленый",
  genre: "Биография / История"
}
];

const singleLibrery = [...books, ...islamicBooks];
console.log(singleLibrery);


// Восьмое задание - ap: добавление свойства isRare по году выпуска

const addRareStatus = (booksArray) => {
  return booksArray.map(function(books) {
    if (books.year > 2000) {
      return {...book, isRare: true };
  } else {
      return { ...book, isRare: false };
  }
  })
};  

const result = addRareStatus(singleLibrery);
console.log(result)



