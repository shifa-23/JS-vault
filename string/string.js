// ---------- 1. String Interpolation ----------
const userName = "shifa";
const projectCount = 2;
console.log(`\n String Interpolation: ${userName} has ${projectCount} projects.`);

// ---------- 2. Working with String Object ----------
const gameName = new String("shifa ");
console.log("\n String Object and Methods:");
console.log("Original:", gameName);
console.log("Char at index 2:", gameName.charAt(2));
console.log("Index of 'a':", gameName.indexOf("a"));
console.log("To Uppercase:", gameName.toUpperCase());
console.log("Substring (0, 4):", gameName.substring(0, 4));
console.log("Slice (-5, 4):", gameName.slice(-5, 4));

// ---------- 3. Trim Whitespace ----------
const spacedString = "   shifa   ";
console.log("\n Trimming:");
console.log("Before Trim:", `"${spacedString}"`);
console.log("After trimStart():", `"${spacedString.trimStart()}"`);
console.log("After trim():", `"${spacedString.trim()}"`);

// ---------- 4. URL Replace & Includes ----------
const url = "https://example.com/%20shifa";
console.log("\n URL Manipulation:");
console.log("Original URL:", url);
console.log("After replace('%20', ' li'):", url.replace('%20', ' li'));
console.log("Includes 'shifa'? :", url.includes("shifa"));

// ---------- 5. String Splitting ----------
const sentence = "JavaScript is powerful";
console.log("\n Splitting Strings:");
console.log("Split by space:", sentence.split(" "));
console.log("Split by 'i':", sentence.split("i"));

// ---------- 6. Math Object ----------
console.log("\n Math Operations:");
console.log("Abs of -5:", Math.abs(-5));
console.log("Ceil of 4.2:", Math.ceil(4.2));
console.log("Floor of 4.9:", Math.floor(4.9));
console.log("Round 4.5:", Math.round(4.5));
console.log("Min of [2, 5, 1]:", Math.min(2, 5, 1));
console.log("Max of [2, 5, 1]:", Math.max(2, 5, 1));
console.log("Random (0-1):", Math.random().toPrecision(2));
console.log("Random 1-10:", Math.floor(Math.random() * 10) + 1);

// Random in range example
const min = 10;
const max = 20;
const randomInRange = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(`Random between ${min} and ${max}:`, randomInRange);

// ---------- 7. Number Precision & Formatting ----------
const someNumber = 121.476;
console.log("\n Number Formatting:");
console.log("To Precision (3 digits):", someNumber.toPrecision(3));

const bigNumber = 1000000000;
console.log("To Locale String (India):", bigNumber.toLocaleString('en-IN')); // 1,00,00,00,000
