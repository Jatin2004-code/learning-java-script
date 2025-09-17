// 📌 1. Array Declaration
let numbers = [10, 20, 30, 40];
let fruits = ["apple", "banana", "mango"];
let mix = [1, "Jatin", true, null];

console.log(numbers);
console.log(fruits);
console.log(mix);


// 📌 2. Access by Index
console.log("First fruit:", fruits[0]);
console.log("Last number:", numbers[numbers.length - 1]);


// 📌 3. Array Length
console.log("Total Fruits:", fruits.length);


// 📌 4. Modify Array
fruits[1] = "orange";
console.log("Modified Fruits:", fruits);


// 📌 5. Array Methods

// 👉 push() - add end
fruits.push("kiwi");

// 👉 pop() - remove end
fruits.pop();

// 👉 unshift() - add start
fruits.unshift("grape");

// 👉 shift() - remove start
fruits.shift();

console.log("Updated Fruits:", fruits);


// 👉 indexOf()
console.log("Index of mango:", fruits.indexOf("mango")); // 1

// 👉 includes()
console.log("Includes apple:", fruits.includes("apple")); // true or false


// 📌 6. Loops on Array

// 👉 for loop
for (let i = 0; i < numbers.length; i++) {
  console.log("Index", i, "=", numbers[i]);
}

// 👉 for..of
for (let fruit of fruits) {
  console.log("Fruit:", fruit);
}

// 👉 forEach()
numbers.forEach(function (num) {
  console.log("Number is:", num);
});


// 📌 7. join(), split()
let joined = fruits.join(" - ");
console.log("Joined string:", joined);


// 📌 8. slice() → extract without changing original
let someFruits = fruits.slice(1, 3);
console.log("Sliced Fruits:", someFruits);


// 📌 9. splice() → remove/replace from array (changes original)
let nums = [1, 2, 3, 4, 5];
nums.splice(1, 2); // remove 2 elements from index 1
console.log("After Splice:", nums);


// 📌 10. concat() → merge arrays
let arr1 = [1, 2];
let arr2 = [3, 4];
let merged = arr1.concat(arr2);
console.log("Merged Array:", merged);


// 📌 11. reverse() / sort()
let letters = ["c", "a", "b"];
letters.sort(); // a, b, c
letters.reverse(); // c, b, a
console.log("Sorted & Reversed:", letters);


// 📌 12. map(), filter(), reduce()

// 👉 map() → returns new array
let double = numbers.map((n) => n * 2);
console.log("Doubled:", double);

// 👉 filter() → filter based on condition
let evens = numbers.filter((n) => n % 2 === 0);
console.log("Even Numbers:", evens);

// 👉 reduce() → single value result
let sum = numbers.reduce((total, n) => total + n, 0);
console.log("Sum is:", sum);
