// WEAKMAP

let obj1 = {
  name: "Melissa",
  age: 12,
};

let obj2 = {
  name: "Roger",
  age: 42,
};

let wm = new WeakMap();

wm.set(obj1, "Info da Melissa");