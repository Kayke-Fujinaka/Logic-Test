// Spread in String
console.log(..."Ratagão");

// Spread in Array
const arr = ["Front-End, ", "Back-End, ", "Fullstack, "];
const peixe = ["Bagre, ", "Baiacu, ", "Pirarucu"];
console.log(...arr, "PIGMEU, ", ...peixe);

// Spread in Arg Function
const makeSandwiche = (bread, cheese, sauce) => {
  return console.log(
    `Your sandwiche with ${bread}, ${cheese} and ${sauce} is done!`
  );
};

const ingredients = ["white", "cheedar", "ketchup"];
const way1 = makeSandwiche(...ingredients);

const way2 = makeSandwiche("white", "cheedar", "ketchup");
