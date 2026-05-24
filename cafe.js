import { Drink } from "./drinks.js";

class Cafe { 
  constructor(name, location) {
    this.name = name; 
    this.location = location;
  }

  getInfoCafe() {
    console.log(`Кафе ${this.name}, находится на ${this.location}`)
  }

  orderdCafe() {
    console.log(`Вы заказали: ${this.getInfo}`);
  }
}

export {Cafe}