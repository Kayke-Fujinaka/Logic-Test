// Class 
class Animal {
  constructor(kind, sound) {
    this.kind = kind;
    this.sound = sound;
  }

  // Método
  hello() {
    console.log(`${this.sound}! I'm a ${this.kind}!`);
  }

  // Método estático
  // Ficam dentro da classe e não vão para objetos de fora, como, por exemplo: 'dog' e 'cat'.
  static bye() {
    console.log(`I'm Animal and goodbye :(`);
  }

  // Vai entender que o get é só uma propriedade
  // Vai buscar a propriedade 'name', então não precisa de parênteses para chamar
  get name() {
    console.log(`${this.sound}! My name is Kayke`);
  }

  set nickname(nick) {
    this.nick = nick;
  }
}

const dog = new Animal("dog", "auau");
const cat = new Animal("cat", "meow");

dog.hello();

Animal.bye();

cat.name;

dog.nickname = "Any";
console.log(dog.nick);
