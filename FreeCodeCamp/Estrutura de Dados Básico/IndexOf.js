function quickCheck(arr, elem) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(elem) >= 0) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));
console.log(quickCheck(["squash", "onions", "shallots"], "shallots"));

console.log(`
--------------------------------------------
`);

function filteredArray(arr, elem) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) == -1) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

console.log(
  filteredArray(
    [
      [3, 2, 3],
      [1, 6, 3],
      [3, 13, 26],
      [19, 3, 9],
    ],
    3
  )
);
