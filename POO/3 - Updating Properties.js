let myInfo = {
  firstName: "Kayke",
  lastName: "Fujinaka",
  age: 18,
  family: {
    dog: "Any",
    bird: "Louro",
  },
  hello() {
    return `Hello, I'm ${this.firstName}!`;
  },
};

// Atualizando
myInfo.lastName = "Alves Fujinaka";

console.log(myInfo);
console.log(`
  ${myInfo.hello()}
  `);
