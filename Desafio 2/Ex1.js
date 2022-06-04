// [ ] Faça um programa que compare um número com 10 e imprime na tela "o número é maior, o número é menor o número é igual"

let random = Math.ceil(Math.random() * 20)

if (random > 10) {
    console.log(`O ${random} é maior que 10`)
} else if (random == 10) {
    console.log(`O ${random} é igual a 10`)
} else {
    console.log(`O ${random} é menor que 10`)
}