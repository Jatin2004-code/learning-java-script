// 📌 1. String Declaration
let str1 = "Hello";
let str2 = 'World';
let str3 = `JavaScript`;

console.log(str1, str2, str3);


// 📌 2. String Concatenation
let full = str1 + " " + str2;
console.log("Concatenated:", full);


// 📌 3. Template Literals (Backticks ``)
let name = "Jatin";
let greet = `Welcome, ${name}!`;
console.log(greet);


// 📌 4. String Length
console.log("Length:", str1.length);


// 📌 5. charAt(index)
console.log("charAt(1):", str1.charAt(1));  // e


// 📌 6. toUpperCase() / toLowerCase()
console.log("Upper:", str1.toUpperCase());
console.log("Lower:", str2.toLowerCase());


// 📌 7. indexOf() / lastIndexOf()
let msg = "Hello JavaScript Java";
console.log("First Java at:", msg.indexOf("Java"));        // 6
console.log("Last Java at:", msg.lastIndexOf("Java"));     // 17


// 📌 8. includes()
console.log("Includes 'Script'? :", msg.includes("Script"));  // true


// 📌 9. startsWith() / endsWith()
console.log("Starts with Hello:", msg.startsWith("Hello"));
console.log("Ends with Java:", msg.endsWith("Java"));


// 📌 10. slice(start, end)
console.log("Slice(6, 16):", msg.slice(6, 16)); // JavaScript


// 📌 11. substring(start, end)
console.log("Substring(6, 16):", msg.substring(6, 16)); // JavaScript


// 📌 12. replace() / replaceAll()
console.log("Replace Java:", msg.replace("Java", "JS"));
console.log("Replace All Java:", msg.replaceAll("Java", "JS"));


// 📌 13. split() → string to array
let fruits = "apple,banana,kiwi";
console.log("Split by comma:", fruits.split(","));


// 📌 14. trim() → remove spaces
let messy = "   Jatin   ";
console.log("Trimmed:", messy.trim());


// 📌 15. repeat()
let laugh = "Ha";
console.log("Repeat 3 times:", laugh.repeat(3)); // HaHaHa


// 📌 16. String Comparison
let a = "apple";
let b = "banana";
console.log("a < b ?", a < b); // true (lexicographically)
