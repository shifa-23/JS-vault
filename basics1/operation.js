// Declaring a variable 'value' and assigning it the number 3
let value = 3;

// Declaring a variable 'negvalue' and assigning it the negation of 'value' (-3)
let negvalue = -value;

// The following line is commented out. If uncommented, it would print '-3' to the console.
// console.log(negvalue); // This will print -3, as 'negvalue' is the negation of 'value'

// Declaring two string variables 'str1' and 'str2'
let str1 = "hi";
let str2 = " ji";

// Concatenating str1 and str2 (combining the two strings into one) and printing it
console.log(str1 + str2); // This will print "hi ji"

// Now let's look at the different string and number concatenation examples:
console.log("1" + 2);  // This will print "12" because '1' is a string and '2' is converted to a string before concatenation
console.log("1" + "2"); // This will print "12" because both "1" and "2" are strings, so they get concatenated
console.log(1 + "2" + 1); // This will print "211" because first 1 is added to the string "2" (resulting in "12"), then "12" + 1 is concatenated, giving "211"
console.log(1 + 2 + "2"); // This will print "32" because 1 + 2 is calculated first (resulting in 3), and then 3 is concatenated with "2" to give "32"
