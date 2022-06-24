/*

Para declarar seus atributos dentro do método construtor, que é um método que toda classe deve ter, 
e que é o primeiro a ser executado sempre quando você cria um novo objeto daquela classe. 

*/

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

const userOne = new User(
  "Lucas Pereira Gomez Fernandez",
  "lucas42gomezrh@outlook.com"
);
const userTwo = new User(
  "Kayke Fujinaka",
  "kayke.fujinaka@gcbinvestimentos.com"
);

console.log(userOne);
console.log(userTwo);
