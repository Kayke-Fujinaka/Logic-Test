const squareList = (arr) => {
  const store = arr
    .filter((e) => Number.isInteger(e) && e > 0)
    .map((e) => Math.pow(e, 2));
  return store;
};

const squaredIntegers = squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]);
console.log(squaredIntegers);
