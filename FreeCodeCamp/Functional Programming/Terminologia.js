// Callbacks são funções que são passadas a outras funções, que decidem quando e como são chamados. 

// Funções que podem ser atribuídas a variáveis, passadas a outras funções ou retornadas de outra função como qualquer outro valor são chamadas de funções de primeira classe. 
// Em JavaScript, todas as funções são funções de primeira classe.

// As funções que recebem funções como argumentos ou retornam outras funções como valores são chamadas de funções de ordem superior.

// Funções podem ser chamadas de lambda quando passadas para outra função ou retornadas a partir dela.

// Função que retorna uma string representando uma xícara de chá verde
const prepareGreenTea = () => 'greenTea';

// Função que retorna uma string representando uma xícara de chá preto
const prepareBlackTea = () => 'blackTea';

/*
Dada uma função (representando o tipo de chá) e o número de xícaras necessárias, a função
a seguir retorna um array de strings (cada uma representa uma xícara de
de um tipo específico de chá).
*/
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Altere apenas o código abaixo desta linha
const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);
// Altere apenas o código acima desta linha

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);