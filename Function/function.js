// 1. Function Declaration
function greet() {
  console.log("Hello Jatin!");
}
greet();


// 2. Function with Parameters
function greetByName(name) {
  console.log("Hello " + name + "!");
}
greetByName("Nilesh");


// 3. Function with Return Value
function add(a, b) {
  return a + b;
}
let sum = add(5, 10);
console.log("Sum is:", sum);


// 4. Function Expression
let sayHello = function(name) {
  console.log("Hi " + name);
};
sayHello("Kanoujiya");


// 5. Arrow Function (Long form)
let multiply = (a, b) => {
  return a * b;
};
console.log("Multiply:", multiply(4, 5));


// 6. Arrow Function (Short form)
let square = n => n * n;
console.log("Square:", square(6));


// 7. Default Parameters
function welcome(name = "Guest") {
  console.log("Welcome " + name);
}
welcome();         // Welcome Guest
welcome("Jatin");  // Welcome Jatin
