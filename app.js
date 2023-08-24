"use strict";

const human = {
  name: "Ihor",
  type: "human",
  sayPhrase() {
    console.log("I can cook");
  },
  cook() {
    console.log("Bon appetit!");
  },
};

const dog = {
  name: "Loki",
  type: "dog",
  sayPhrase() {
    console.log("I like to eat");
  },
  eat() {
    console.log("Sooo delicious!");
  },
};

// function (arg1, arg2) {}

class Human {
  constructor(name, phrase) {
    this.name = name;
    this.phrase = phrase;
    this.type = "human";
  }

  sayPhrase() {
    console.log(this.phrase);
  }

  cook() {
    console.log(`My name is ${this.name} and I like to cook.`);
  }
}

const humanClass = new Human("Ihor", "I can cook");

// humanClass.sayPhrase();
// humanClass.cook();

class Dog2 {
  constructor(name) {
    this.name = name;
    this.type = "dog";
  }

  sayPhrase() {
    console.log("I like to eat");
  }

  eat() {
    console.log(`My name is ${this.name} and i like to eat`);
  }
}

// const loki = new Dog("Loki");
// loki.eat();

// console.log(typeof Dog);

// Успадкування

class Animal {
  constructor(isMeatEating) {
    this.isMeatEating = isMeatEating;
  }

  eatMeat() {
    if (this.isMeatEating) {
      console.log("I like to eat meat.");
    } else {
      console.log("I don't like eat meat");
    }
  }
}

class Pets extends Animal {
  constructor(profile, isMeatEating) {
    super(isMeatEating);

    this.profile = profile;
  }

  playWithToys() {
    console.log("I like to play with toys.");
  }
}

class Dog extends Pets {
  constructor(name, isMeatEating) {
    super(isMeatEating);

    this.name = name;
  }

  eat() {
    console.log("I like to eat");
  }
}

const luna = new Dog("Luna", false);
const lucky = new Dog("Lucky", false);
// console.log(luna);
// console.log(lucky);

// luna.eatMeat();

// Інкапсуляція

class CoffeeMachine {
  #counter;

  constructor(name) {
    this.#counter = 0;
    this.name = name;
  }

  makeCoffee(type) {
    if (this.#counter > 5) {
      console.log("Потібно почистити кавомашину");
      return;
    }

    if (type === "cupp") {
      this.#warnMilk();
    }

    console.log("Ваша кава успішно приговлена.");

    this.#counter = this.#counter + 1;
  }

  #warnMilk() {
    console.log("Молоко успішно підігріто");
  }

  clear() {
    this.#counter = 0;
    console.log("Чисто!");
  }
}

const franke = new CoffeeMachine("franke");

// console.log(franke);
// franke.makeCoffee();
// franke.makeCoffee();
// franke.makeCoffee();
// franke.makeCoffee();
// franke.makeCoffee();
// franke.makeCoffee("cupp");
// franke.makeCoffee("cupp");
// franke.clear();
// franke.makeCoffee("cupp");

class Animal2 {
  constructor(name) {
    this.name = name;
  }

  move() {
    if (this.name === "rabbit") {
      console.log("I can jump!");
    } else {
      console.log("I can run");
    }
  }
}

class Rabbit extends Animal2 {
  constructor(name) {
    super(name);
  }
}

class Cat extends Animal2 {
  constructor(name) {
    super(name);
    this.name = name;
  }

  move() {
    console.log("Я переписав метод!");
  }
}

const rabbit = new Rabbit("rabbit");
const cat = new Cat("cat");

rabbit.move();
cat.move();

function parse(data) {
  if (typeof data === "string") {
    return data.toLowerCase();
  }

  return data.map((item) => {
    return item.toLowerCase();
  });
}

parse("Some String");
parse(["Some", "String"]);

class AuthAPI {
  login() {}

  register() {}

  logut() {}
}

class UserAPI {
  getMe() {}

  update() {}
}
