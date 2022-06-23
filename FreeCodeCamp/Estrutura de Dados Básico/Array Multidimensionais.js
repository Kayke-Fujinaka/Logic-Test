let myNestedArray = [
  "level 1",
  ["level 2"],
  [["level 3", "deep"]],
  [[["level 4", "deeper"]]],
  [[[["level 5", "deepest"]]]],
];

console.log(myNestedArray[0]);
console.log(myNestedArray[1][0]);
console.log(myNestedArray[2][0][0]);
console.log(myNestedArray[3][0][0][0]);
console.log(myNestedArray[4][0][0][0][0]);
