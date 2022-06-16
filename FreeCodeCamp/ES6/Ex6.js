// Use the Rest Parameter with Function Parameters

const sum = (...args) => {
  return args.reduce((acc, cur) => acc + cur, 0);
};

console.log(sum(2, 4, 4));
