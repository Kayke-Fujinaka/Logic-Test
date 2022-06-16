// class
function Animal(kind, sound) {
    this.kind = kind;
    this.sound = sound;
  }
  
  // method
  Animal.prototype.hello = function () {
    console.log(`${this.sound}! I'm a ${this.kind}!`);
  };
  
  // method
  Animal.prototype.bye = function () {
    console.log(`I'm ${this.kind} and goodbye :(`);
  };
  
  const dog = new Animal("dog", "auau");
  const cat = new Animal("cat", "meow");
  dog.hello();
  cat.hello();
  dog.bye();
  