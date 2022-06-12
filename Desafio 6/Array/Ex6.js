// Access Multi-Dimensional Arrays With Indexes

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

// Vai acessar o array que está na terceira posição do array
console.log(arr[3]);
// Vai acessar o array que está na terceira posição do array
// Depois vai acessar o array da posição 0
console.log(arr[3][0]);
// Vai acessar o array que está na terceira posição do array
// Depois vai acessar o array da posição 0
// Vai acessar a posição de index 1 do array acessado de cima
console.log(arr[3][0][1]);
