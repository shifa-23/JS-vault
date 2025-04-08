// A primitive number
const score = 400;

// Creating a Number object explicitly using the Number constructor
const balance = new Number(100);

// Output the Number object (balance)
console.log("Balance (Number object):", balance); // [Number: 100]

// Output the primitive number (score)
console.log("Score (primitive):", score); // 400

// Convert the balance to a string, and get the string length
console.log("Length of balance as string:", balance.toString().length); // "100" → length = 3