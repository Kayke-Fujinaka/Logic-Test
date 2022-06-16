let ages = [17, 21, 16, 14, 9, 22, 12, 43, 99, 44, 32];

let clients = [
  { name: "Angelo Luz", birth: 1986, genre: "M", purchaseDaysAgo: 10 },
  { name: "Chuck", birth: 1940, genre: "M", purchaseDaysAgo: 5 },
  { name: "Sansa Stark", birth: 2002, genre: "F", purchaseDaysAgo: 32 },
  { name: "Dean winchester", birth: 1982, genre: "M", purchaseDaysAgo: 45 },
  {
    name: "Ricardo Botelho da Silva",
    birth: 1993,
    genre: "M",
    purchaseDaysAgo: 29,
  },
  { name: "Ragnar", birth: 1960, genre: "M", purchaseDaysAgo: 25 },
  { name: "Elias Wojahn", birth: 1989, genre: "M", purchaseDaysAgo: 15 },
];

//EX 1: Incrementa em 1 o purchaseDaysAgo de todos objetos
const increment = clients.map((value) => value.purchaseDaysAgo + 1);
console.log(increment);

//EX 2: Verifica se um determinado número de entrada está contido no array
const cont = ages.includes(9);
console.log(cont);

//EX 3: Altera array para ficar só com o primeiro nome dos clientes
const nameClient = clients.map((v) => v.name.split(" ")[0]);
console.log(nameClient);

//EX 4: Incrementa a idade apenas dos clientes das posições ímpares do array
const incre = clients.filter((value, index) =>
  index % 2 === 0 ? (value.birth += 1) : value.birth
);
console.log(incre);

//EX 5: Retorna quantos são do sexo masculino
function buscarMens(clients) {
  if (clients.genre === "M") return clients;
}

let numberMens = clients.filter(buscarMens);

console.log(`Existem ${numberMens.length} homens.`);

//EX 6: Retorna todos as pessoas de sexo masculino

let client = clients.filter((client) => client.genre === "M");
console.log(client);
