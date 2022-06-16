/*

[ ] Escreva um programa onde, você chame uma função enviando um número 
(aceitar somente valores entre 1 e 10) e escrever a tabuada de 1 a 10 do valor lido.

*/

const count = (num) => {
    if (num >= 1 && num <= 10) {
        for(i = 1; i <= 10; i++){
            console.log(`${num} x ${i} = ${num * i}`)
        }
    } else {
        console.log(num)
        console.log("Só aceita valores entre 1 e 10")
    }
}

count((Math.ceil(Math.random() * 15)))