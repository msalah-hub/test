
export class Drink {
  #temperature;
  constructor(name, size, price, temp){
    
    if (new.target === Drink) {
      throw new Error("Нельзя создать экземпляр абстрактного класса Drink!")      
    }
    this.name = name;
    this.size = size; 
    this.price = price;
    this.#temperature = temp;
  }

  getInfo() {
    return(`Напиток: ${this.name}, объем: ${this.size}, цена: ${this.price}`)
  }

  getTemperature() {
    return(`Температура напитка: ${this.#temperature}`)
  }

  setTemperature() {
    return(this.#temperature)
  }

  #cookingDrink() {
    return(this.name)
  }

  serveDrink() {
    this.#cookingDrink();
    this.setTemperature(70);
    console.log(`Ваш напиток ${this.name} готов, температура напитка ${this.#temperature}`);
  }
}

class Tea extends Drink {
  constructor(name, size, price, typeTea, typeAdditive ) {
    super(name, size, price)
    this.typeTea = typeTea;
    this.typeAdditive = typeAdditive;
  }
}

class Natakhtari extends Drink {
  constructor(name, size, price, typeFruit, country) {
    super(name, size, price)
    this.typeFruit = typeFruit;
    this.country = country;
  }
}

class Coffee extends Drink {
  constructor(name, size, price, typeGrain, typeMilk) {
    super(name, size, price)
    this.typeGrain = typeGrain;
    this.typeMilk = typeMilk;
  }
}

export { Tea, Natakhtari, Coffee}