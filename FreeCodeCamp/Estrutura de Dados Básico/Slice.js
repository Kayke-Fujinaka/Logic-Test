// O slice() copia ou extrai um determinado número de elementos para um novo array, deixando o array em que o método é chamado inalterado.

let weatherConditions = ["rain", "snow", "sleet", "hail", "clear"];
let todaysWeather = weatherConditions.slice(1, 3);

console.log(todaysWeather);
