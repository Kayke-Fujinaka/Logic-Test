// Return Early Pattern for Functions

function abTest(a, b) {
  // Caso o números passados como argumento sejam negativos, ele vai retornar undefined
  if (a < 0 || b < 0) {
    return;
  }

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

console.log(abTest(2, 2));
