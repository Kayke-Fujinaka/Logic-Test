console.log(`
---- In Object ----`);

const object = {
  name: "Kayke",
  age: 17,
  hair: "black",
  favorites: {
    anime: "One Piece",
    food: "Egg",
  },
  animal: "Any",
};

// Vai pegar o elemento 'age'
const { age } = object;
console.log(age);

// Vai pegar um elemento dentro de um elemento
const { anime } = object.favorites;
console.log(anime);

// Declarar um novo elemento no Object
const { drink = "tea" } = object.favorites;
console.log(drink);

// ----------------------------------------------------------------------
console.log(`
---- In Array ----`);

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const [zero, one, two, ...value] = array;
console.log(zero);
console.log(value);

// ----------------------------------------------------------------------
console.log(`
---- Var Swap ----`);

let a = 120;
let b = 24;

console.log(`Antes: 
a: ${a}
b: ${b}
`);

[a, b] = [b, a];

console.log(`Depois: 
a: ${a}
b: ${b}
`);
