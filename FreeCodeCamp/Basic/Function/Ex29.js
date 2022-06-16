// Use the Conditional (Ternary) Operator

function findGreater(a, b) {
  if (a > b) {
    return "a is greater";
  } else {
    return "b is greater or equal";
  }
}

console.log(findGreater(12, 2))

// ---

function findGreater1(a, b) {
  return a > b ? "a is greater" : "b is greater or equal";
}

console.log(findGreater1(1, 2))