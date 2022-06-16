// -------------- Array.from() --------------

console.log(`
--- Array.from() ---
`);
// Ele cria uma nova instância de um Array quando for passado um array-like ou um iterable object como argumento.
// O split é 74 vezes mais rápido do que o Array.from para converter string em um array.
const text = "Fala, meu amigo!";

console.log(Array.from(text));





// -------------- Array.of() --------------

console.log(`


--- Array.of() ---
`);
// Ele serve para criar um novo Array apartir da instância passada.
// No caso, eu passo o número 1, a string "Kayke" e um objeto contendo nome e idade.
const newArray = Array.of(1, "Kayke", { name: "João", idade: 12 });

console.log(newArray);





// -------------- Array.find() e Array.findIndex() --------------

console.log(`


--- Array.find() e Array.findIndex() ---
`);
const arrayWithObject = [
  {
    name: "Kayke",
    age: 17,
  },
  {
    name: "Pedro",
    age: 25,
  },
];
const array = [-1, -5, 8, 9];

// O Array.find vai retornar o primeiro valor que corresponder com a função.
// Caso não encontre ele vai retornar um undefined
const arrayFind = array.find((x) => x > 0);
// O Array.find vai retornar a posição do primeiro valor que corresponder com a função.
// Caso não encontre ele vai retornar um undefined
const arrayFindIndex = array.findIndex((x) => x > 0);

// Com Array maiores

// Vai buscar a string "Kayke" no Array e pelos Objects. Vai mandar o primeiro que encontrar.
const nameFind = arrayWithObject.find((x) => x.name === "Kayke");
// Vai mandar a posição do Object que ele encontrou o Kayke
const nameFindIndex = arrayWithObject.findIndex((x) => x.name === "Kayke");

console.log(arrayFind);
console.log(arrayFindIndex);
console.log(nameFind)
console.log(nameFindIndex)





// -------------- Array.fill() --------------

console.log(`


--- Array.fill() ---
`);

// Criei um novo Array que possui 10 de length
const arr = new Array(10)
// Array.fill() vai preencher o Array com a string '1', mas... vai começar na posição 4 e interromper na posição 6
arr.fill("1", 4, 6)
console.log(arr)

// Criei um Array que vai do número 1 ao 10
const newArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// Array.fill() vai preencher o Array com a string 'Intruso', mas... vai iniciando na posição 4 e interrompendo na posição 6
newArr.fill("Intruso", 4, 6)
console.log(newArr)