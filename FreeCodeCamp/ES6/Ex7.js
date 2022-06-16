// -----------> Destructuring Assignment <-----------

const HIGH_TEMPERATURES = {
  yesterday: { low: 61, high: 75 },
  today: 77,
  tomorrow: 80,
};

// Extract Values from Objects
const { today, tomorrow } = HIGH_TEMPERATURES;
console.log(today, tomorrow);

// Assign Variables from Objects
const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;
console.log(highToday, highTomorrow);

// Assign Variables from Nested Objects
const {
  yesterday: { low: lowYesterday, high: highYesterday },
} = HIGH_TEMPERATURES;
console.log(lowYesterday, highYesterday);
