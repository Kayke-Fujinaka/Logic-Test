// Classe genérica
class Animal {
  constructor(name) {
    this.name = name;
  }

  hello() {
    console.log(`I'm ${this.name}!`);
  }
}

// Quando tem uma necessidade um pouco menor
// Extende a classe genérica Animal
class Dog extends Animal {
  constructor(name, sound) {
    super(name);
    this.sound = sound;
  }

  bark() {
    console.log(`${this.sound}! I'm ${this.name}`);
  }
}

const elephant = new Animal("Dumbo");
elephant.hello();

const dog = new Dog("Rocha", "Whoof");
dog.bark();
