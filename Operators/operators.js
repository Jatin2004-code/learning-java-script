//| Operator | Meaning                     | Example     | Result  |
//| -------- | --------------------------- | ----------- | ------- |
//| `==`     | Equal to (value)            | `5 == "5"`  | `true`  |
//| `===`    | Strict equal (value + type) | `5 === "5"` | `false` |
//| `!=`     | Not equal (value)           | `5 != "6"`  | `true`  |
//| `!==`    | Strict not equal            | `5 !== "5"` | `true`  |
//| `>`      | Greater than                | `10 > 5`    | `true`  |
//| `<`      | Less than                   | `5 < 10`    | `true`  |
//| `>=`     | Greater than or equal to    | `5 >= 5`    | `true`  |
//| `<=`     | Less than or equal to       | `3 <= 5`    | `true`  |


//Example
let a = 10;
let b = 5;
console.log(a + b); // Output: 15
console.log(a % b); // Output: 0 (10 ko 5 se divide karne par remainder 0 hai)
console.log(2 ** 3); // Output: 8 (2 ki power 3)


// Logical Operators Example
let userAge = 25;
let hasLicense = true;

// AND (&&) ka example
if (userAge > 18 && hasLicense === true) {
  console.log("Aap safely drive kar sakte hain.");
}

// OR (||) ka example
let isSunday = false;
let isHoliday = true;
if (isSunday || isHoliday) {
  console.log("Aaj chutti hai!");
}


let marks = 85;

// Normal if-else
if (marks > 80) {
  console.log("Grade A");
} else {
  console.log("Grade B");
}

// Ternary Operator se
let grade = marks > 80 ? "Grade A" : "Grade B";
console.log("Aapka grade hai:", grade);