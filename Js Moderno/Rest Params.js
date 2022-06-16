// A sintaxe de rest parameter (parâmetros rest nos permite representar um número indefinido de argumentos como um array.
// É bom para quando não se sabe quando argumentos vai ter naquela função
// OBSERVAÇÃO: Não tem como passar outros argumentos depois

const multiply = (multi, ...args) => args.map((e) => e * multi);
console.log(multiply(2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
