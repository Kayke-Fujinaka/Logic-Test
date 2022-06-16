// [ ] Faça um programa que receba 3 números inteiros, e deve imprimir, qual é o maior, qual é o menor.

const arr = [
  Math.ceil(Math.random() * 10),
  Math.ceil(Math.random() * 10),
  Math.ceil(Math.random() * 10),
];

console.log("Os números foram:");
for (let letter of arr) {
    console.log(letter);
}



const min = Math.min(...arr);
const max = Math.max(...arr);

console.log("------------------------");
console.log(`O menor número foi: ${min}`);
console.log(`O maior número foi: ${max}`);
