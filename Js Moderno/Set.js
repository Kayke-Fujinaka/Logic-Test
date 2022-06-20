// SET

// Ele permite guardar valores únicos de um tipo
// Seja primitivo, string, inteiro, objeto, etc

// Ele não aceita valores repetidos, mas apenas objetos repetidos

let mySet = new Set(["Kayke", "João", "Mario"]);

// Vai pegar todo o mySet junto do tamanho dele atual
console.log(mySet);

// Vai mostrar o tamanho do mySet
console.log(mySet.size);

// Vai adicionar o 'Pedro' ao mySet
console.log(mySet.add("Pedro"));

// Vai verificar se tem a string no mySet e retornar com um booleano
console.log(mySet.has("Pedro"));
console.log(mySet.has("Maria"));

console.log("---------------------------");

let it = mySet.values();
console.log(it);
console.log(it.next());

console.log("---------------------------");

for (name of it) {
  console.log(name);
}
