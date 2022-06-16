// Ex 1
// Filtrar apenas os números pares e divisíveis por 5

const list = [17, 21, 60, 16, 14, 20, 9, 22, 12, 43, 99, 10, 100, 44, 32];

const newList = list.filter((values) => {
    if(values % 2 !== 0 || values % 5 !== 0) return false
    return true
});
console.log(newList);

// Ex 2
/* 
Apenas as empresas que foram fundadas depois de 1965
Tenham mais de 200 no marketValue
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

const newListCompanies = companies.filter(value => value.foundedOn > 1965 && value.marketValue > 200)

console.log(newListCompanies)