// Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements

const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b);
console.log(arr);

// -----------

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
  const [a, b, ...arrr] = list;
  return arrr;
}
const arrr = removeFirstTwo(source);
console.log(arrr);
