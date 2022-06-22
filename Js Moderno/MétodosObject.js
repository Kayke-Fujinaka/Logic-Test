const animal = {
  camel: 2,
  llama: 5,
  alpaca: 1,
};

// -------------- Object.entries() --------------

console.log(`


--- Object.entries() ---
`);

// O método Object.entries() retorna um array cujos elementos são também arrays
// correspondentes aos pares de propriedades [key, value] enumeráveis encontrados diretamente sobre o objeto.

console.log(Object.entries(animal));

const animalsMap = new Map(Object.entries(animal));
console.log(animalsMap);
console.log("Números de elementos dentro do Objeto:", animalsMap.size);
console.log("Existe uma llama?", animalsMap.has("llama"));
console.log("Existe um leão?", animalsMap.has("lion"));
console.log("Valor de llamas:", animalsMap.get("llama"));

// -------------- Object.values() --------------

console.log(`


--- Object.values() ---
`);

// O Object.values() retorna um array cujos elementos são os valores das propriedades enumeradas encontradas no objeto.

console.log("Retornando os valores do Objeto:", Object.values(animal));
console.log(
  "Total de animais:",
  Object.values(animal).reduce((a, b) => a + b)
);
