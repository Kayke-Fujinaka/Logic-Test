function countdown(n) {
  if (n < 1) {
    return [];
  }

  let count = countdown(n - 1);
  count.unshift(n);

  return count;
}

const call = countdown(3);
console.log(call);
