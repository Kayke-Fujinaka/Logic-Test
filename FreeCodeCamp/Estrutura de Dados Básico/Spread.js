let thisArray = [true, true, undefined, false, null];
let thatArray = ["OPA", ...thisArray, "ROÇA"];
console.log("Sem Spread:",thisArray)
console.log("Com Spread:",thatArray)