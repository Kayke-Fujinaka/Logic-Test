/*

[ ] Faça um programa onde ele leia 4 números. 
Em cada caso, ele deve retornar a mensagem condizente: 

- Todos os números são impares => TODOS OS NÚMEROS SÃO IMPARES 
- Todos os números são pares => TODOS OS NÚMEROS SÃO PARE. 

Em caso negativo dos casos a cima, colocar uma mensagem => Há números pares e ímpares.

*/

const arr = [
  Math.ceil(Math.random() * 10),
  Math.ceil(Math.random() * 10),
  Math.ceil(Math.random() * 10),
  Math.ceil(Math.random() * 10),
];

for (let letter of arr) {
  console.log(letter);
}

if (
  arr[0] % 2 === 0 &&
  arr[1] % 2 === 0 &&
  arr[2] % 2 === 0 &&
  arr[3] % 2 === 0
) {
  console.log("Todos os números são pares");
} else if (
  arr[0] % 2 !== 0 &&
  arr[1] % 2 !== 0 &&
  arr[2] % 2 !== 0 &&
  arr[3] % 2 !== 0
) {
  console.log("Todos os números são impares");
} else {
  console.log("Os números são impares e pares");
}
