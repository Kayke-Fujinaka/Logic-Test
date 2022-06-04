/*

[ ] Escreva um programa onde, você chame uma função, e ela diga a hora exata!

*/

const time = () => {
    const hour = new Date().toLocaleTimeString()
    console.log(hour)
}

time()