const s = [23, 65, 98, 5];

Array.prototype.myMap = function (callback) {
  const newArray = [];
  this.forEach((e) => newArray.push(callback(e)));
  return newArray;
};

const new_s = s.myMap(function (item) {
  return item * 2;
});

console.log(new_s);
