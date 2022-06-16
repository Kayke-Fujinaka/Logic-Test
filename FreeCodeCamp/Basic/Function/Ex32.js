function rangeOfNumbers(startNum, endNum) {
  if (endNum - startNum === 0) {
    return [startNum];
  } else {
    let numbers = rangeOfNumbers(startNum + 1, endNum);
    numbers.unshift(startNum);
    return numbers;
  }
}

const call = rangeOfNumbers(2, 6);
console.log(call);
