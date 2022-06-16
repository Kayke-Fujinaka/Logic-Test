// Build JavaScript Objects

const cat = {
  name: "Whiskers",
  legs: 4,
  tails: 1,
  enemies: ["Water", "Dogs"],
};

// Accessing Object Properties
const prop1val = cat.enemies[1];
console.log(prop1val);

// Accessing Object Properties
const myDog = "name";
const prop2val = cat[myDog];
console.log(prop2val);

// Accessing Object Properties
console.log(cat["legs"]);

// Updating Object Properties
cat.tails = 5

// Add New Properties
cat.bark = "bow-wow";

// Delete Properties
delete cat.legs;


console.log(cat)