// Mutate an Array Declared with const

const s = [5, 7, 2];

// ------------------------

function editInPlace() {
  return s.sort();
}
editInPlace();

// ------------------------

function editInPlace2() {
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
}
editInPlace2();
