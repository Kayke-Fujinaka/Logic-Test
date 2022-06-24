function alphabeticalOrder(arr) {
  return arr.sort();
}

console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));

// ---------------------------------

const globalArray = [1, 30, 4, 21, 100000];

function nonMutatingSort(arr) {
  const store = [];
  return store.concat(arr).sort((a,b) => a - b);
}

const call = nonMutatingSort(globalArray);
console.log(call);
