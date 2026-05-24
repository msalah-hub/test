import { Tea, Natakhtari, Coffee, Temperature } from "./drinks.js";

class Cafe { 
  constructor(name, location) {
    this.name = name; 
    this.location = location;
  }

  getInfoCafe() {
    console.log(`Кафе ${this.name}, находится на ${this.location}`)
  }

  orderCafe(drink) {
    drink.serveDrink();

    console.log(`В кафе ${this.name}, ваш заказ ${drink.name}`);
  }
}

export {Cafe}