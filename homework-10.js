class Phone {
  constructor(name, model, rom) {
    this.name = name;
    this.model = model; 
    this.rom = rom;
  }
  showInfo() {
    console.log(`name: ${this.name}, model: ${this.model}, rom:${this.rom}`);
  }
}


class Smartphone extends Phone {
  constructor(name, model, rom, ios) {
    super(name, model, rom);
    this.ios = ios;
  }
  showInfoSmart() {
    console.log(`IOS: ${this.ios}`);
  }
}

const phoneMi = new Phone("Xiaomi", "15", "256")
const phoneRedmi = new Phone("Redmi", "13T", "128")
const smartphoneApple = new Smartphone("iPhone", "13 pro", "256", "18.5")


phoneMi.showInfo();
phoneRedmi.showInfo();
smartphoneApple.showInfo();
smartphoneApple.showInfoSmart();




