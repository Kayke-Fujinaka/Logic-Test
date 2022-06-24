/*
Programação funcional é um estilo de programação em que as soluções são:
funções simples, isoladas e livres de efeitos colaterais fora do escopo da função.

Quando falamos de programação funcional, pensamos em:

1 - Funções isoladas: nenhuma função depende do estado do programa, incluindo variáveis globais, que podem sofrer mudanças

2 - Funções puras: a mesma entrada sempre devolve a mesma saída

3 - Funções com efeitos colaterais limitados: qualquer alteração ou mutação do estado do programa fora da função é cuidadosamente controlada
*/

// --------------------------

// Função que retorna uma string representando uma xícara de chá verde
const prepareTea = () => 'greenTea';

/*
Dada uma função (representando o tipo de chá) e o número de xícaras necessárias, a função
a seguir retorna um array de strings (cada uma representa uma xícara de
de um tipo específico de chá).
*/
const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 0; cups < numOfCups; cups ++) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Altere apenas o código abaixo desta linha
const tea4TeamFCC = getTea(40);
// Altere apenas o código acima desta linha