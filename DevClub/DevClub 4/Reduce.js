// Ex 1
// Qual o valor de todos os MarketValue somados?

const companies = [
  { name: "Samsung", marketValue: 50, CEO: "Kim Hyun Suk", foundedOn: 1938 },
  { name: "Microsof", marketValue: 415, CEO: "Satya Nadella", foundedOn: 1975 },
  { name: "Intel", marketValue: 117, CEO: "Brian Krzanich", foundedOn: 1968 },
  {
    name: "Facebook",
    marketValue: 383,
    CEO: "Mark Zuckerberg",
    foundedOn: 2004,
  },
  { name: "Spotify", marketValue: 30, CEO: "Daniel EK", foundedOn: 2006 },
  { name: "Apple", marketValue: 845, CEO: "Tim Cook", foundedOn: 1976 },
];

const newList = companies.reduce((acc, value) => (acc += value.marketValue), 0);
console.log(newList);

// Ex 2
/* 
- Através do Array abaixo, gere uma mensagem "Vinho cozido, Tomate cozido, Cebola cozida, Cogumelo Cozido"
- Exibe String no Console
*/

const ingredientes = ["vinho", "tomate", "cebola", "cogumelo", "Rúcula"];

const cook = ingredientes
  .map((value) => {
    const primeiraLetra = value[0].toUpperCase();
    return value.replace(value[0], primeiraLetra);
  })
  .reduce((acc, value, index, array) => {
    if (index === array.length - 1) {
      if (value.slice(-1) === "a") {
        return acc + `${value} cozida`;
      } else {
        return acc + `${value} cozido`;
      }
    }

    if (value.slice(-1) === "a") {
      return acc + `${value} cozida, `;
    }

    return acc + `${value} cozido, `;
  }, "");
console.log(cook);
