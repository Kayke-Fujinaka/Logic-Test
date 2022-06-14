const cheeseBread = {
  bread: "francês",
  cheese: "prato",
  optional: "presuntinho",
  prepare: function () {
    console.log(
      `Eu tenho um pão ${this.bread} com ${this.cheese}, mas coloquei um ${this.optional} para dar um grau!`
    );
  },
};
cheeseBread.prepare();

let pedro = {
  nome: "Pedro",
  dizerFrase() {
    // Shorthand parameters, pois é a mesma coisa que: dizerFrase: function() {}
    console.log(`${this.nome} está correndo para pegar o trem!`);
  },
};
pedro.dizerFrase();
