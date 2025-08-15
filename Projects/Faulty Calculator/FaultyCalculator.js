// 1. User se input lena (hum abhi ke liye values fix kar dete hain)
let num1 = 10;
let num2 = 5;
let operation = "+";

// 2. Ek object banate hain galat operations ke liye
let faultyOperations = {
  "+": "-",
  "*": "+",
  "-": "/",
  "/": "**"
};

// 3. Random number generate karna
let randomValue = Math.random();
console.log("Random value aayi:", randomValue);

// 4. Condition check karna
if (randomValue < 0.1) {
  // 10% chance: Galat calculation karo
  console.log("Faulty calculation ho rahi hai!");
  operation = faultyOperations[operation]; // Operation ko badal do
} else {
  // 90% chance: Sahi calculation karo
  console.log("Correct calculation ho rahi hai.");
}

// 5. Result calculate karna
let expression = num1 + " " + operation + " " + num2;
console.log("Final expression:", expression);
let result = eval(expression);

console.log("Result hai:", result);