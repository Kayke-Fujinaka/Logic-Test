/*

[ ] Escreva um programa onde, você chame uma função mandando dois argumentos, 2 números, e a função responde qual número é maior

*/

const count = (num1, num2) => {
    if(num1 > num2){
        console.log(`O número ${num1} é maior que o ${num2}`)
    } else if (num1 == num2) {
        console.log(`O número ${num1} é igual ao ${num2}`)
    } else {
        console.log(`O número ${num1} é menor que o ${num2}`)
    }
}

count((Math.ceil(Math.random() * 15)), (Math.ceil(Math.random() * 15)))