// Declaring a constant variable 'accountId' with a value of 14382
const accountId = 14382;

// Declaring a variable 'accountemail' using 'let' and initializing it with an email address
let accountemail = "js@gmail.com";

// Declaring a variable 'accountPassword' using 'var' and initializing it with a password
var accountPassword = "12345";

// Declaring a variable 'accountCity' using 'let' (implicitly) and assigning it a value " india"
accountCity = " india";

// Declaring a variable 'accounthome' but not initializing it (it will be undefined by default)
let accounthome;

// Uncommenting the line below would cause an error because 'accountId' is a constant and cannot be reassigned
// accountId = 2; // Error: "Assignment to constant variable."

// Logging the value of 'accountId' to the console
console.log(accountId);

// Using 'console.table' to display all the declared variables in a table format
// This will display the values of all variables, including 'undefined' for 'accounthome' as it has not been assigned any value
console.table([accountId, accountemail, accountPassword, accountCity, accounthome]);

// Note: In the console.table output, 'accounthome' will be shown as 'undefined' since it was declared but not initialized with a value.
