//Encapsulation Example
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age}`);
  }
}

const p1 = new Person("Jatin", 22);
p1.greet(); // Hi, my name is Jatin and I am 22




// Abstraction Example
class Car {
  constructor() {
    this.engineStarted = false;
  }

  startEngine() {
    this.engineStarted = true;
    console.log("🚗 Engine started");
  }

  drive() {
    if (this.engineStarted) {
      console.log("🚙 Driving...");
    } else {
      console.log("❌ Start the engine first");
    }
  }
}

const myCar = new Car();
myCar.drive();       // ❌ Start the engine first
myCar.startEngine(); // 🚗 Engine started
myCar.drive();       // 🚙 Driving...





// Inheritance Example
class Animal {
  speak() {
    console.log("Animal speaks");
  }
}

class Dog extends Animal {
  bark() {
    console.log("🐶 Dog barks");
  }
}

const d = new Dog();
d.speak(); // Animal speaks
d.bark();  // 🐶 Dog barks




// Polymorphism Example
class Animal {
  speak() {
    console.log("Animal sound");
  }
}

class Cat extends Animal {
  speak() {
    console.log("🐱 Meow");
  }
}

class Dog extends Animal {
  speak() {
    console.log("🐶 Bark");
  }
}

let a1 = new Cat();
let a2 = new Dog();

a1.speak(); // 🐱 Meow
a2.speak(); // 🐶 Bark


