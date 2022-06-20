// A função Symbol() retorna um valor do tipo símbolo (symbol)
// Cada valor símbolo retornado de Symbol() é único
let foo = Symbol("name");
let fo = Symbol("name");

console.log(foo);
console.log(foo === fo);
console.log(foo === foo);
