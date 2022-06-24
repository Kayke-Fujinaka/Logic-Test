/*

Para declarar seus atributos dentro do método construtor, que é um método que toda classe deve ter, 
e que é o primeiro a ser executado sempre quando você cria um novo objeto daquela classe. 

*/

class User {
  constructor(param1, param2) {
    this.atribute1 = param1;
    this.atribute2 = param2;
  }
}

var userOne = new User();
