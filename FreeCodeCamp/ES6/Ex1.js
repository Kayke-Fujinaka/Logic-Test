// Compare Scopes of the var and let Keywords

function checkScope() {
  let i = "function scope";
  if (true) {
    let i = "block scope";
    console.log("Block scope i is:", i, `\n-----------------`);
  }
  console.log("Function scope i is:", i, `\n-----------------`);
  return i;
}

console.log(checkScope());
