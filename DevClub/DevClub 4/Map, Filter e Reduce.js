// Ex 1
/* 

- Adicionar 10% de valor de mercado para cada companhia. Ex: 50 -> 55
- Filtrar apenas as empresas que foram fundadas antes do ano 2000
- Somar o valor de mercado das empresas que restaram

*/

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

const newList = companies
  .filter((value) => value.foundedOn < 2000)
  .map((value) => {
    value.marketValue += value.marketValue / 10;
    return value;
  })
  .reduce((acc, value) => (acc += value.marketValue), 0);
console.log(newList);
