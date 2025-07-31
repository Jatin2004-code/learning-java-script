
// STRING
let str = "hello";
console.log(typeof str); // string

// NUMBER
let num1 = 21;
let num2 = 3.14;
console.log(typeof num1); // number
console.log(typeof num2); // number

// BOOLEAN
let isTrue = true;
let isFalse = false;
console.log(typeof isTrue); // boolean
console.log(typeof isFalse); // boolean

// UNDEFINED
let x;
console.log(typeof x); // undefined

// NULL (typeof null is object — this is a bug in JS)
let y = null;
console.log(typeof y); // object (but actually it's null)

// OBJECT
let person = { name: "Jatin" };
console.log(typeof person); // object

// ARRAY (arrays are special type of object in JS)
let arr = [1, 2, 3];
console.log(typeof arr); // object
console.log(Array.isArray(arr)); // true  ← This confirms it's an array
