// Nesting For Loops

const arr = [
  [1, 2],
  [3, 4],
  [5, 6],
];

for (let i = 0; i < arr.length; i++) {
  // Pega o sub-arrays
  console.log(arr[i]);
  for (let j = 0; j < arr[i].length; j++) {
    // Pega todos os números dentro dos sub-arrays
    console.log(arr[i][j]);
  }
}
