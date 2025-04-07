// "use strict"; - This directive is used to enforce stricter parsing and error handling in your JavaScript code. 
// It helps prevent common coding mistakes, such as assigning values to undeclared variables or using reserved keywords. 
// It’s a good practice to use this in modern JavaScript for cleaner and more secure code.
"use strict";

// The following line is commented out. In a modern browser environment, you cannot use the 'alert' function in strict mode
// because 'alert' is often associated with browser-specific global objects. It's not strictly related to the code's behavior, 
// but since "use strict" restricts some behaviors, it's a good idea to avoid relying on non-standard functions like 'alert'.
// alert("hi"); // This would show an alert pop-up in browsers if the script wasn't in strict mode

// Now logging simple expressions to the console:
console.log(3 + 3);  // This logs the result of 3 + 3, which is 6.
console.log("hi");   // This logs the string "hi" to the console.


// Comment: It’s not readable, not a good practice
// The reason why it's considered "not readable" is because putting multiple statements in a single line can make the code less clear.
// It's better to keep each statement on its own line for readability, maintainability, and clarity.
// Example:
// console.log(3 + 3);
// console.log("hi");

// ECMA Script (ECMAScript), TC39, and MDN Documentation:
// ECMA Script (often abbreviated as ES) is the specification on which JavaScript is based. 
// TC39 is the technical committee responsible for evolving the ECMAScript standard.
// MDN (Mozilla Developer Network) provides detailed documentation on JavaScript and web technologies, including examples, references, and best practices.

// Checking the type of 'null' using the 'typeof' operator:
console.log(typeof null); // This will log 'object' to the console.
// This is a well-known JavaScript quirk. Even though 'null' is not an object, the 'typeof' operator returns 'object' for null. 
// It's a historical bug in JavaScript that was never fixed for backward compatibility.
