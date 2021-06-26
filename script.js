

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b == 0)
    {
        //handle dividing by zero
        throwZeroError();
        return null;
    }
    return a / b;
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function clear(params) {
    numbers.length = 0;
    operator = null;
}

function throwError(params) {
    display.textContent = errors[0];
    clear();
}

function throwZeroError(params) {
    display.textContent = errors[1];
    clear();
}

function operation(params) {
    if (numbers.length != 2 || operator == null)   
    {
        throwError;
    }
}

function clearButtonClick()
{
    clear();
    display.textContent = "";
}

function digitButtonClick(params) {
    
}

function operatorButtonClick(params) {
    
}

function equalsButtonClick(params) {
    
}

function buttonClickDeleteError(params) {
    if (errors.includes(display.textContent))
    {
        display.textContent = "";
    }
}



const numbers = [];
const errors = ["ERROR", "ERROR: DIVIDING BY ZERO"]
let operator = null;

const display = document.querySelector("#display");
display.textContent = "aha";

const buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener("click", buttonClickDeleteError));

const digitButtons = document.querySelectorAll(".digitButton");
digitButtons.forEach(digitButton => digitButton.addEventListener("click", digitButtonClick));

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", clearButtonClick);

const operatorButtons = document.querySelectorAll(".operatorButton");
operatorButtons.forEach(operatorButton => operatorButton.addEventListener("click", operatorButtonClick));

const equalsButton = document.querySelector("#equals");
