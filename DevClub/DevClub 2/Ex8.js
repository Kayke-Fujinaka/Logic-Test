/*

[ ] Faça um programa onde leia um número e diga se ele é: 
- ímpar 
- par 
- é um número primo e impar 
- é par e divisível por 5

*/

const num = Math.ceil(Math.random() * 25);
let divisor = 0

for(i = 1; i <= num; i++){
    if(num % i == 0){
        divisor++
    }
}

if (num % 2 == 0 && num % 5 == 0){
    console.log(`O número ${num} é par e divisível por 5`)
} else if (num % 2 == 0 && num % 5 !== 0) {
    console.log(`O número ${num} é par e não é divisível por 5`)
} else if (num % 2 !== 0 && num % 5 == 0) {
    console.log(`O número ${num} é ímpar e divisível por 5`)
} else {
    console.log(`O número ${num} é ímpar e não é divisível por 5`)
}

if(divisor == 2){
    console.log("Ele é primo")
} else {
    console.log("Ele não é primo")
}