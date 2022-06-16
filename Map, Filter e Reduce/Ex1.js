let ages = [17, 21, 16, 14, 9, 22, 12, 43, 99, 44, 32];

//EX 1: Altera todos os valores em +1
const agesPlus = ages.map((values) => values + 1);
console.log(agesPlus);

//EX 2: Retorna todos os valores ímpares
const impares = ages.filter((values) => values % 2 !== 0);
console.log(impares);

//EX 3: Altera todos os valores ímpares para o próximo par
const imparesPlus = ages.map((values) =>
  values % 2 == 1 ? values + 1 : values
);
console.log(imparesPlus);

//EX 4: Cria um novo array com os valores menores do que 20 de numbers
const menores20 = ages.filter((values) => values < 20);
console.log(menores20);

//EX 5: Cria um novo array com os valores menores do que 17 e incrementar eles em um
const menores17 = ages
  .filter((values) => values < 17)
  .map((values) => values + 1);
console.log(menores17);

//EX 6: Retorne a soma de todos os valores menores do que 20
const somaMenores20 = ages
  .filter((value) => value < 20)
  .reduce((sum, value) => (sum + value));
console.log(somaMenores20);

