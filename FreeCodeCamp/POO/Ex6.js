function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Altere apenas o código abaixo desta linha

let duck = new Bird();
let beagle = new Dog();

Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;

duck.constructor
beagle.constructor