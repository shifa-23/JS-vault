// Declaring a variable 'a' with the string value "2"
let a = "2";

// Checking the type of 'a' using 'typeof'. It will print "string" because 'a' is a string.
console.log(typeof a); // "string"

// Comparing 'a' (which is a string "2") with the number 5.
// JavaScript will try to convert the string "2" into a number, and then compare.
// Since 2 is less than 5, the result is 'true'.
console.log(a > 5); // true

// Again checking the type of 'a'. It is still a string.
console.log(typeof a); // "string"

// Comparing 'null' with 0.
// In JavaScript, 'null' is considered as 0 when compared with numbers, so the result is 'false'.
console.log(null > 0); // false

// Comparing 'null' with 0 using equality '=='.
// 'null' is equal to 'null', but not equal to any other value, so the result is 'true'.
console.log(null == 0); // false

// Comparing 'null' with itself. This is true because 'null' is equal to 'null'.
console.log(null == null); // true

// Comparing 'null' with 'undefined' using '>' operator.
// In JavaScript, 'null' is considered less than 'undefined' when compared with the '>' operator, so the result is 'false'.
console.log(null > undefined); // false

// Comparing 'null' with 'undefined' using '<' operator.
// JavaScript considers 'null' less than 'undefined' when using the '<' operator, so the result is 'true'.
console.log(null < undefined); // true

// Comparing 'null' with 'undefined' using '<=' operator.
// JavaScript considers 'null' less than or equal to 'undefined', so the result is 'true'.
console.log(null <= undefined); // true

// Comparing 'null' with 'undefined' using '>=' operator.
// JavaScript considers 'null' less than or equal to 'undefined', so the result is 'true'.
console.log(null >= undefined); // false

// Comparing 'null' with 0 using '>=' operator.
// In JavaScript, 'null' is considered equal to 0 when compared with the '>=' operator, so the result is 'true'.
console.log(null >= 0); // true

// Comparing 'undefined' with 0 using '>=' operator.
// 'undefined' is not comparable to a number in JavaScript, so the result is 'false'.
console.log(undefined >= 0); // false

// Comparing the string "5" with the number 5 using strict equality (===).
// Strict equality checks both value and type. Since one is a string and the other is a number, the result is 'false'.
console.log("5" === 5); // false

// Logging the string "6" to the console. It will simply print "6".
console.log("6"); // "6"
