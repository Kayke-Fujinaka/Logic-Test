// WeakSet

let obj1 = {
  name: "Melissa",
  age: 12
};

let obj2 = {
  name: "Roger",
  age: 42
};

let ws = new WeakSet([obj1, obj2]);
console.log(ws);
