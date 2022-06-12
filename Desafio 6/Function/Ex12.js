// Stand in Line

function nextInLine(arr, item) {
  // Vai enviar o argumento 'item' para o final do array
  arr.push(item);
  // Vai remover o primeiro elemento do array
  const removed = arr.shift();
  return removed;
  // Only change code above this line
}
const testArr = [1, 2, 3, 4, 5];
console.log(nextInLine(testArr, 6));
