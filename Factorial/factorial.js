function factorialWithLoop(n) {
  // Step 1: Ek "result" variable banate hain.
  let result = 1;

  // Step 2: Loop chalate hain.
  for (let i = 1; i <= n; i++) {
    // Step 3: Har baar result ko 'i' se multiply karte hain.
    result = result * i;
  }

  // Step 4: Final result ko wapas bhejte hain.
  return result;
}

console.log(factorialWithLoop(5)); // Output: 120





function factorialWithReduce(n) {
  // Step 1: 1 se 'n' tak ke numbers ka array banate hain.
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  // Agar n=5 hai, to arr banega: [1, 2, 3, 4, 5]

  // Step 2: reduce method ka use karte hain.
  const result = arr.reduce((accumulator, currentValue) => {
    return accumulator * currentValue;
  }, 1);

  // Step 3: Final result ko wapas bhejte hain.
  return result;
}

console.log(factorialWithReduce(5)); // Output: 120