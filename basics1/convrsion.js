// Declaring a variable 'score' and initializing it with a string value "33"
let score = "33";

// Using typeof to check the data type of the variable 'score'
// It will print "string" because 'score' is a string.
console.log(typeof score);

// Checking the type of 'score' again using the same 'typeof' operator (it will give the same result)
console.log(typeof (score));

// Converting the string 'score' into a number using the 'Number()' function
let valueInNumber = Number(score);

// Using typeof to check the data type after converting 'score' to a number
console.log(typeof (valueInNumber));  // It will print "number" as 'valueInNumber' is now a number

// Logging the value of 'valueInNumber' to see the actual result
console.log(valueInNumber);  // This will print 33 as the string "33" has been converted into a number

// Printing some blank lines to separate the next part of the code for clarity
console.log(" ");
console.log(" ");
console.log(" ");
console.log(" ");
console.log(" ");
console.log(" ");
console.log(" ");

// Declaring a variable 'score1' with a string that includes numbers and letters ("33abc")
let score1 = "33abc";

// Checking the data type of 'score1' (it will be "string")
console.log(typeof score1);

// Again checking the type of 'score1'
console.log(typeof (score1));

// Converting 'score1' to a number using 'Number()'. Since the string includes non-numeric characters, this will result in NaN (Not-a-Number).
let valueInNumber1 = Number(score1);

// Checking the type after conversion (it will be "number")
console.log(typeof (valueInNumber1));

// Logging the result of the conversion (it will print NaN since "33abc" is not a valid number)
console.log(valueInNumber1);  // This will print NaN because the string contains non-numeric characters

// Printing blank lines for clarity
console.log(" ");
console.log(" ");

// Declaring a variable 'score2' with a value of null
let score2 = null;

// Checking the data type of 'score2' (it will print "object" because null is considered an object in JavaScript)
console.log(typeof score2);

// Again checking the type of 'score2' (same as before)
console.log(typeof (score2));

// Converting 'score2' (null) into a number. In JavaScript, null is converted to 0 when treated as a number.
let valueInNumber2 = Number(score2);

// Checking the type after conversion (it will print "number" because null becomes 0)
console.log(typeof (valueInNumber2));

// Logging the result of the conversion (it will print 0 because null is treated as 0)
console.log(valueInNumber2);  // This will print 0 because null is treated as 0

// Printing blank lines for clarity
console.log(" ");
console.log(" ");

// Declaring a variable 'score3' with a value of undefined
let score3 = undefined;

// Checking the data type of 'score3' (it will print "undefined")
console.log(typeof score3);

// Again checking the type of 'score3'
console.log(typeof (score3));

// Converting 'score3' (undefined) into a number. In JavaScript, undefined is converted to NaN when treated as a number.
let valueInNumber3 = Number(score3);

// Checking the type after conversion (it will print "number" because undefined becomes NaN)
console.log(typeof (valueInNumber3));

// Logging the result of the conversion (it will print NaN because undefined is treated as NaN)
console.log(valueInNumber3);  // This will print NaN because undefined is treated as NaN

// Declaring a variable 'isloggedin' with a value of undefined
let isloggedin = undefined;

// Using the Boolean() function to convert 'isloggedin' (undefined) into a boolean value
// In JavaScript, undefined is converted to false when treated as a boolean.
let booleanIsLoggedIn = Boolean(isloggedin);

// Logging the result of the conversion (it will print false because undefined is treated as false)
console.log(booleanIsLoggedIn);  // This will print false because undefined is falsy
