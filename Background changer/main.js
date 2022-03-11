// Referencing things in the variables.
let body = document.querySelector('body');
let colorCode = document.querySelector('.color-code');
let previewCard = document.querySelector('.preview-ctn');
let btn = document.querySelector('.action-btn');

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];

// Function to generate the random Hex-color
function getRandomHexColor() {
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += getRandomNumber();
    }
    return color;
}

// Function to Generate Random number between 0 and 15.
function getRandomNumber() {
    let number = Math.floor(Math.random() * arr.length);
    return arr[number];
}

// Adding Click Event listener to the button.
btn.addEventListener('click', function() {
    let color = getRandomHexColor();
    colorCode.textContent = getRandomHexColor().toUpperCase();
    previewCard.style.backgroundColor = color;
    body.style.backgroundColor = color;
    console.log(getRandomHexColor());
})