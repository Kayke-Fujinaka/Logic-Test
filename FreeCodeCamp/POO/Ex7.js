function Animal() {}
Animal.prototype.eat = function () {
  console.log("nom nom nom");
};

function Dog() {}

// Dog é um construtor que herda seu prototype de Animal
// Ela tem os métodos herdados, além de ter seus próprios métodos.
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Comportamento único do objeto Dog
Dog.prototype.bark = function () {
  console.log("Woof!");
};

// Sobrescrever métodos herdados
Dog.prototype.eat = function() {
  console.log("nhame nhame nhame");
}

// As intâncias de Dog vai herdar dois métodos
let beagle = new Dog();
beagle.eat();
beagle.bark();
