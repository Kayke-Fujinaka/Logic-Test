function Bird(name) {
  this.name = name;
}

Bird.prototype = {
  constructor: Bird,
  numLegs: 2,
  eat: function () {
    console.log("nom nom nom");
  },
  describe: function () {
    console.log("My name is " + this.name);
  },
};

let canary = new Bird("Tweety");

let ownProps = [];
let prototypeProps = [];

for (let property in canary) {
  if (canary.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    // Vai pegar o numLegs que é uma propriedade, mas não uma que foi definida dentro do object
    prototypeProps.push(property);
  }
}

console.log(ownProps);
console.log(prototypeProps);

// Verifica o prototype do canary
console.log(Bird.prototype.isPrototypeOf(canary))

console.log(typeof Bird.prototype)