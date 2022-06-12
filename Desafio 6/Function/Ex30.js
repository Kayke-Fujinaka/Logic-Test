// Use Multiple Conditional (Ternary) Operators

function findGreaterOrEqual(a, b) {
  return a === b
    ? "a and b are equal"
    : a > b
    ? "a is greater"
    : "b is greater";
}

console.log(findGreaterOrEqual(10, 20));

// -------------

function checkSign(num) {
  return num == 0 ? "zero" : num > 0 ? "positive" : "negative";
}

console.log(checkSign(10));
