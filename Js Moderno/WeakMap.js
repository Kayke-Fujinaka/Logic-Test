// WEAKMAP
const { inspect } = require("util");

const wm = new WeakMap();

let obj = {
  name: "Melissa",
  age: 12,
};

let obj2 = {
  name: "Roger",
  age: 42,
};

wm.set(obj, "Info da Melissa");
console.log(inspect(wm, { showHidden: true }));
