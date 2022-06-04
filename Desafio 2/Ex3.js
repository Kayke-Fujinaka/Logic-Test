/*

[ ] Faça um programa que gere um número aleatório entre 1 e 10, esse número é o número 'ganhador'. 
Então ele também irá gerar um número aleatório entre 1 e 10, e verifica se a pessoa ganhou ou não. 
Em caso de ter ganhado, mostra o prêmio, se não ganhou, mostra outra mensagem.

*/

const randomNum = Math.ceil(Math.random() * 10)
const winNum = Math.ceil(Math.random() * 10)

if(randomNum == winNum) {
    console.log(`O seu número foi ${randomNum} e o número ganhador foi...${winNum}\nParabéns você ganhou!!!`)
} else {
    console.log(`O seu número foi ${randomNum} e o número ganhador foi...${winNum}\nInfelizmente você perdeu.`)
}