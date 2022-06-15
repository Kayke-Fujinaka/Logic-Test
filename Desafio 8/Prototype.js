// CLASS
// O construtor do objeto Animal é definido com dois parâmetros, kind e sound. 
// Outras duas funções dog e cat executam Animal passando this, kind e sound.
function Animal(kind, sound) {
  // O this vai se referir ao as propriedades que ele herdou abaixo lá nas constantes 'dog' e 'cat'.
  this.kind = kind;
  this.sound = sound;
}

// METHOD
Animal.prototype.hello = function () {
  console.log(`${this.sound}! I'm a ${this.kind}!`);
};

// METHOD
Animal.prototype.bye = function () {
  console.log(`I'm ${this.kind} and goodbye :(`);
};

const dog = new Animal("dog", "auau");
const cat = new Animal("cat", "meow");
// Vai passar o 'dog' com seus parâmetros passando no chamado hello()
dog.hello();
cat.hello(); 
dog.bye();


