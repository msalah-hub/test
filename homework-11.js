import { Tea, Natakhtari, Coffee } from "./drinks.js";
import { Cafe } from "./cafe.js";

const tea = new Tea('Чай', 'L', 150, "Зеленый", "Чабрец");
const natakhtari = new Natakhtari("Сок", "1л", 150, "Фейхоа", "Грузия");
const coffee = new Coffee("Раф банановый", 200, "М", "Арабика", "Кокосовый");
const cafe = new Cafe("Раф", "Ул. Банановая, 77")

console.log(natakhtari.getInfo());
natakhtari.serveDrink();
cafe.getInfoCafe();

