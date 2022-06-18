function Dog(name, color, tail, ear) {
  this.name = name;
  this.color = color;
  this.ear = ear;
  this.numLegs = 4;
  this.tail = tail;
}

let doguinho = new Dog();
doguinho.name = "Smily";
doguinho.color = "Preto";
doguinho.ear = 2;
doguinho.tail = 1;

console.log(doguinho);
// O instanceof permite que você compare um objeto a um construtor,
// retornando true ou false caso seja ou não um objeto criado pelo construtor, respectivamente.
console.log(doguinho instanceof Dog);

// ---------------- OU ----------------

let Bird = function (name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
};

let crow = new Bird("Alexis", "black");

console.log(crow);
// O instanceof permite que você compare um objeto a um construtor,
// retornando true ou false caso seja ou não um objeto criado pelo construtor, respectivamente.
console.log(crow instanceof Bird);
