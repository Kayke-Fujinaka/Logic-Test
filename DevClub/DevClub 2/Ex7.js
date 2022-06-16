// [ ] Faça um programa onde leia um numero e diga se ele é par ou impar.

const num = Math.ceil(Math.random() * 10);

if (num % 2 == 0){
    console.log(`O número ${num} é par`)
} else {
    console.log(`O número ${num} é ímpar`)
}