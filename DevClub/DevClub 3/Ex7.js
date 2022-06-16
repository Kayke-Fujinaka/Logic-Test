/*

[ ] Faça um programa onde, você chame uma função que calcule a taxa mensal de juros de um investimento.

Você deve enviar como argumentos da função 
- Valor inicial investido 
- Valor atual do investimento 
- Tempo em meses, que o valor está investido

A função deve RETORNAR a taxa de juros, já formatada. 
Ex: 2,5%. 
Siga a formula desse vídeo para te auxiliar com o cálculo.

*/

const interestCalculate = (valueInitial, currentValueInvestment, timeInMonth) => {
    let rate
    let fees = currentValueInvestment - valueInitial

    rate = (fees / (valueInitial * timeInMonth)) * 100

    return (console.log(`Taxa de juros mensal: ${rate}%`))
}


interestCalculate(2000, 2600, 12)