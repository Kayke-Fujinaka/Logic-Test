// Usar o método slice em vez do splice ajuda a evitar alterações em arrays e, portanto, efeitos colaterais.

function nonMutatingSplice(cities) {
  return cities.slice(0,3);
}

const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
console.log(nonMutatingSplice(inputCities));