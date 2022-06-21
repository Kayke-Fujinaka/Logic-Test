// GENERATORS

/* 
Generators são funções especiais que podem ser executadas, pausadas e continuadas 
em diferentes estágios da sua execução, tudo isso graças a nova palavra reservada yield.

Nós declaramos uma função generator usando a sintaxe especial: function* myfunction() {}

Cada vez que .next é chamado, o generator é executado até o próximo yield. 
A chamada para .next retorna um objeto contendo o valor retornado pelo yield 
e uma flag dizendo se o generator foi finalizado ou não.
*/

function* genNames() {
  console.log("Chamando o primeiro nome");
  // A palavra-chave yield é usada para pausar e resumir uma generator function.
  yield "Pedro";
  console.log("Chamando o segundo nome");
  yield "Rafael";
  console.log("Chamando o terceiro nome");
  yield "João";
}

const names = genNames();

console.log(names.next());
console.log(names.return("Opa"));
