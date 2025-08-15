// HTML elements ko select karein
const generateBtn = document.getElementById('generateBtn');
const colorBox = document.querySelector('.color-box');
const hexCodeDisplay = document.querySelector('.hex-code');

// Random hex color generate karne ka function
function generateRandomHexColor() {
    const hexCharacters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * 16);
        color += hexCharacters[randomIndex];
    }
    return color;
}

// Color update karne ka function
function updateColor() {
    // Naya random color generate karein
    const newColor = generateRandomHexColor();
    
    // Color box aur page ke background ka color update karein
    colorBox.style.backgroundColor = newColor;
    
    // Hex code display karein
    hexCodeDisplay.textContent = newColor;
}

// Button par 'click' event listener lagayein
generateBtn.addEventListener('click', updateColor);

// Page load hote hi ek initial color set kar dein
updateColor();