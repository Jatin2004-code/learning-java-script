// ✅ for Loop
for (let i = 1; i <= 5; i++) {
  console.log("i =", i);
}

// ✅ while Loop
let j = 1;
while (j <= 5) {
  console.log("j =", j);
  j++;
}

// ✅ do...while Loop
let k = 1;
do {
  console.log("k =", k);
  k++;
} while (k <= 5);

// ✅ for...in Loop (for Objects)
let student = {
  name: "Jatin",
  age: 21,
  city: "Mumbai"
};

for (let key in student) {
  console.log("Key:", key, "| Value:", student[key]);
}

// ✅ for...of Loop (for Arrays & Iterables)
let numbers = [10, 20, 30];

for (let num of numbers) {
  console.log("Number:", num);
}

// ✅ break and continue example
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue; // skip jab i = 3 ho
  if (i === 5) break;    // jab i = 5 ho to loop band karo
  console.log(i);
}
