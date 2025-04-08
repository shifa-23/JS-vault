// Creating a new Date object representing the current date and time
let currentDate = new Date();

// Displaying the date in various formats
console.log("To Date String:", currentDate.toDateString());        
console.log("To ISO String:", currentDate.toISOString());         
console.log("To JSON:", currentDate.toJSON());                      
console.log("To Locale Date String:", currentDate.toLocaleDateString()); 
console.log("To Locale String:", currentDate.toLocaleString());     
console.log("To Locale Time String:", currentDate.toLocaleTimeString()); 
console.log("To String:", currentDate.toString());                 // Full date-time string
console.log("To Time String:", currentDate.toTimeString());        // Time + time zone
console.log("To UTC String:", currentDate.toUTCString());          // Date in UTC format

// Modify the year of the date
console.log("Updated Year Timestamp:", currentDate.setFullYear(2026)); // Sets year to 2026

// Checking types
console.log("Type of Date:", typeof Date);         // function
console.log("Type of Date instance:", typeof currentDate); // object

// Creating a custom date (note: months are 0-indexed, so 2 = March)
let customDate = new Date(2022, 2, 45); // This overflows into April
console.log("Custom Date:", customDate.toLocaleDateString()); 

// Getting current timestamp in milliseconds since Unix Epoch
let currentTimestamp = Date.now();
console.log("Current Timestamp:", currentTimestamp);

// Getting timestamp of the custom date
console.log("Custom Date Timestamp:", customDate.getTime());

// Creating another date for timestamp comparison
let futureDate = new Date(2025, 3, 11); // April 11, 2025
console.log("Future Date Timestamp:", futureDate.getTime());

// Working with date components
let newDate = new Date();
console.log("Current Date:", newDate);                      // Full date object
console.log("Current Time in ms:", newDate.getTime());      // Milliseconds since Epoch
console.log("Current Milliseconds:", newDate.getMilliseconds()); // Milliseconds part only

// Display formatted date and time
console.log(`Today's date is ${newDate.getDate()} and the current timestamp is ${newDate.getTime().toLocaleString()}`);

// Display day of the week
console.log("Day of the week:", newDate.toLocaleString('default', {
    weekday: "long",
}));
