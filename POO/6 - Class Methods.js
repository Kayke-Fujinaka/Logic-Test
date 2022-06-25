class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  hello() {
    return `
    Hello, my name's ${this.name}`;
  }
  bye() {
    return `
    ${this.name} is leave`;
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

userTwo.hello().bye();
