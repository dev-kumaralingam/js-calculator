let display = document.getElementById('display');
let currentInput = '';

function appendToDisplay(value) {
    currentInput += value;
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.value = '';
}

function calculateResult() {
    try {
        currentInput = eval(currentInput);
        display.value = currentInput;
    } catch (error) {
        display.value = 'Error';
    }
}

function calculateSquareRoot() {
    try {
        currentInput = Math.sqrt(eval(currentInput));
        display.value = currentInput;
    } catch (error) {
        display.value = 'Error';
    }
}

function calculatePower() {
    try {
        currentInput = Math.pow(eval(currentInput), 2);
        display.value = currentInput;
    } catch (error) {
        display.value = 'Error';
    }
}

function calculateDelete(){
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
}