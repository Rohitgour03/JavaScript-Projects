// Accessing diffrent DOM elements
const currentDisplay = document.querySelector('.current-display')
const previousDisplay = document.querySelector('.previous-display')

const btns = document.querySelectorAll('.btn')
const numBtns = document.querySelectorAll('.num')
const operations = document.querySelectorAll('.operation')
const resetBtn = document.querySelector('.reset')
const delBtn = document.querySelector('.del')
const equalBtn = document.querySelector('.equal')


// Declaring the useful variables
let firstOperand, secondOperand, currentOperand = null;


// Taking the inputs from the buttons and showing the output in the display
numBtns.forEach(numBtn => {
    numBtn.addEventListener('click', (event) => {
        if (currentDisplay.textContent == 0) {
            currentDisplay.textContent = "";
        }
        currentDisplay.textContent += event.target.innerText;
    })
})


//  Function to Reset the calculator
function clearDisplay() {
    currentDisplay.textContent = ''
    previousDisplay.textContent = ''
    firstOperand = 0
    secondOperand = 0
    currentOperand = null
}
resetBtn.addEventListener('click', clearDisplay);


// Function to clear display by one character at a time
function backspace() {
    const currentDisplayValue = currentDisplay.textContent
    currentDisplay.textContent = currentDisplayValue.slice(0, currentDisplayValue.length - 1)

    if (currentDisplay.textContent.length === 0) {
        currentDisplay.textContent = 0
        previousDisplay.textContent = ''
    }
}
delBtn.addEventListener('click', backspace)


operations.forEach(operation => {
    operation.addEventListener('click', (event) => {
        if (currentOperand === null) {
            firstOperand = currentDisplay.textContent
            currentOperand = operation.innerText
            currentDisplay.textContent += operation.innerText

        } else {
            secondOperand = currentDisplay.textContent
            console.log("second Operand: ", secondOperand)
            calculate()
            currentOperand = operation.innerText
            currentDisplay.textContent += operation.innerText
        }

        previousDisplay.textContent = currentDisplay.textContent
        currentDisplay.textContent = ''
        console.log("first Operand: ", firstOperand)

    })
})

equalBtn.addEventListener('click', (event) => {
    if (currentOperand !== null) {
        secondOperand = currentDisplay.textContent;
        console.log("second Operand: ", secondOperand)
        calculate()
    } else {
        previousDisplay.textContent = currentDisplay.textContent
    }
    // previousDisplay.textContent = firstOperand
})


// Function to add the numbers
function add(num1, num2) {
    return num1 + num2;
}

// Function to subtract numbers
function subtract(num1, num2) {
    return num1 - num2;
}

// Function to multiply the numbers
function multiply(num1, num2) {
    return num1 * num2;
}

// Function to divide the numbers
function divide(num1, num2) {
    return num1 / num2;
}

// Function to do the necessary operation
function operate(operation, num1, num2) {
    switch (operation) {
        case '+':
            return add(num1, num2);

        case '-':
            return subtract(num1, num2);

        case 'x':
            return multiply(num1, num2);

        case '/':
            return divide(num1, num2);

            // case '=':
            //     console.log("I ran")
            //     return secondOperand;
    }
}


function calculate() {

    previousDisplay.textContent += currentDisplay.textContent
    currentDisplay.textContent = operate(currentOperand, parseFloat(firstOperand), parseFloat(secondOperand));

    firstOperand = currentDisplay.textContent

    currentOperand = null
    return currentDisplay.textContent;
}