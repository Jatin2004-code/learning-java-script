console.log("Script is running...");

/**
 * Ye function 0 se 255 ke beech ek random number generate karta hai.
 * Hum iska istemaal Red, Green, aur Blue (RGB) values banane ke liye karenge.
 */
function getRandomColor() {
  let r = Math.floor(Math.random() * 256); // Random Red value
  let g = Math.floor(Math.random() * 256); // Random Green value
  let b = Math.floor(Math.random() * 256); // Random Blue value
  return `rgb(${r}, ${g}, ${b})`;
}

// 1. Saare boxes ko unke class name se select karna.
let boxes = document.querySelectorAll(".box");

// 2. forEach loop ka use karke har ek box par jaana.
boxes.forEach(box => {
  // 3. Har box ke liye, ek random background color set karna.
  box.style.backgroundColor = getRandomColor();
  
  // 4. Har box ke liye, ek random text color set karna.
  box.style.color = getRandomColor();
});