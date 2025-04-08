// The built-in Math object contains properties and methods for mathematical constants and functions
console.log("Math Object:", Math); // Displays the Math object structure

// Absolute value: Converts negative numbers to positive
console.log("Absolute of -4:", Math.abs(-4)); // 4

// Rounds a number UP to the nearest integer
console.log("Ceil of 4.2:", Math.ceil(4.2)); // 5

// Rounds a number DOWN to the nearest integer
console.log("Floor of 4.2:", Math.floor(4.2)); // 4

// Rounds to the nearest integer (0.5 and up goes up, below goes down)
console.log("Round of 4.5:", Math.round(4.5)); // 5

// Returns the smallest number in a list
console.log("Min of [2, 34, 2, 1, 3, 4]:", Math.min(2, 34, 2, 1, 3, 4)); // 1

// Returns the largest number in a list
console.log("Max of [2, 34, 2, 1, 3, 4]:", Math.max(2, 34, 2, 1, 3, 4)); // 34

// Generates a random number between 0 and 1, then formats it to 2 significant digits
console.log("Random (precision 2):", Math.random().toPrecision(2)); // e.g., "0.75"

// Converts a random number to a string
console.log("Random toString:", Math.random().toString()); // e.g., "0.628172934..."

 // Generates a random number between 1 and 10 (inclusive), formats to
