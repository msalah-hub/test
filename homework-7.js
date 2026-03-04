import { commentsSocialMedia } from "./comments.js";

// Первое задание - Фильтрация чисел от 5 до 10


const numbers = [1,2,3,4,5,6,7,8,9,10];
const newNumbers = numbers.slice(4);

console.log(newNumbers);


// Второе задание - Проверка наличия сущности в массиве строк


const turtles = [
  "Mikilanjelo",
  "Donatello",
  "Leo",
  "Raf"
];

const newTurtles = turtles.find(turtle => turtle === "Leo");

console.log(newTurtles);


// Третье задание - Функция переворота массива


const reverseArray = (arr) => {
  arr.reverse();
  return arr;
};


console.log(reverseArray(numbers));
console.log(reverseArray(turtles));

// Четвертое задание - Фильтрация комментариев с почтой .com


const commentsWithComMail = commentsSocialMedia.filter(comment => comment.email.includes('.com'));

console.log(commentsWithComMail);


// Пятое задание - Изменение postId в зависимости от id


const updatedUsers = commentsSocialMedia.map(user => ({
  ...user,
  postId: user.id <= 5 ? 1 : 2
}));

console.log(updatedUsers);


// Шестое задание - Преобразование объектов к id и name


const userNameId = commentsSocialMedia.map(user => ({
  id: user.id,
  name: user.name
}));

console.log(userNameId);


// Седьмое задание - Добавление флага isInvalid по длине body


const validatedComments = commentsSocialMedia.map(item => ({
  ...item,
  isInvalid: item.body.length > 180
}));

console.log(validatedComments);


// Восьмое задание - Получение массива почт через reduce и map


// reduce()
const userEmails = commentsSocialMedia.reduce((accumulator, user) => {
  return [...accumulator, user.email];
},[]);

console.log(userEmails);

// map()
const userMails = commentsSocialMedia.map((mail) => {
  return mail.email;
});

console.log(userMails);


// Девятое задание - Преобразование массива почт в строку


// method toString();
const emailsString = userEmails.toString();

console.log(emailsString);

//method join();
const emailsJoin = userMails.join(' | ');

console.log(emailsJoin);