// every() verifica se todos os elementos passam em um teste

function checkPositive(arr) {
  return arr.every((test) => test > 0);
}

const call = checkPositive([1, 2, 3, -4, 5]);
console.log(call);
