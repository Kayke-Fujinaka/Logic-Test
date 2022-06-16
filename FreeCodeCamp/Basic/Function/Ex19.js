const ourStorage = [
  {
    desk: {
      drawer: "stapler",
    },
    cabinet: {
      "top drawer": {
        folder1: "a file",
        folder2: "secrets",
      },
      "bottom drawer": "soda",
    },
  },
  {
    animalType: "cat",
    names: ["Meowzer", "Fluffy", "Kit-Cat"],
  },
  {
    animalType: "dog",
    names: ["Spot", "Bowser", "Frankie"],
  },
];

// Accessing Nested Objects
console.log(ourStorage[0].cabinet["top drawer"].folder2);
console.log(ourStorage[0].desk.drawer);

// Accessing Nested Arrays
console.log(ourStorage[2].names[1]);
