// Use Destructuring Assignment to Assign Variables from Arrays

// 1, 2, 3
const [a, b, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c);

// 1, 4, 5
const [j, , , k, l] = [1, 2, 3, 4, 5, 6];
console.log(j, k, l);

// Os valores 'a' e 'b' vão inverter de valores
let x = 8, y = 6;
console.log([x, y] = [y, x] )