/*

[ ] Faça um programa onde os jurados vão dar a explicação para cada nota dada. 
São permitidas notas de 0 a 10. Cada nota deve conter uma mensagem diferente.

*/

const num = Math.ceil(Math.random() * 10);

if (num !== null) {
  console.log(`Tirou: ${num}`);
} else {
  console.log("Não conseguimos encontrar a nota no sistema");
}

switch (num) {
  case 1:
    console.log("Horrível");
    break;
  case 2:
    console.log("Péssimo");
    break;
  case 3:
    console.log("Ruim");
    break;
  case 4:
    console.log("Vamos que consegue");
    break;
  case 5:
    console.log("Faltou pouco");
    break;
  case 6:
    console.log("Médio, mas vamos melhoras");
    break;
  case 7:
    console.log("Bom");
    break;
  case 8:
    console.log("Bacana");
    break;
  case 9:
    console.log("Muito bom");
    break;
  case 10:
    console.log("Parabéns foi excelente");
    break;
  default:
    console.log("Não fez a prova");
}
