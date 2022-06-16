/*

[ ] Escreva um programa onde, você chame uma função, e ela diga que ano estamos!

*/

const year = () => {
    const hour = new Date().toLocaleDateString()
    console.log(hour)
}

year()