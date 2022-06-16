// We'll define a minimum number min and a maximum number max.

// Math.floor(Math.random() * (max - min + 1)) + min

const randomRange = (myMin, myMax) =>
  Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;

console.log(randomRange(10, 1));
