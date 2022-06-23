function filteredArray(arr, elem) {
  let newArr = [];
  // Altere apenas o código abaixo desta linha
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].indexOf(elem));
    if (arr[i].indexOf(elem) == -1) {
      newArr.push(arr[i]);
    }
  }
  // Altere apenas o código acima desta linha
  return newArr;
}

console.log(
  filteredArray(
    [
      [10, 8, 3],
      [14, 6, 23],
      [3, 18, 6],
    ],
    18
  )
);
