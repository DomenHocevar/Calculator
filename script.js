

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b == 0)
    {
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
    operatorState();
}

function throwError(params) {
    display.textContent = errors[0];
    clear();
}

function throwZeroError(params) {
    display.textContent = errors[1];
    clear();
}

function operation(a, b) {
    console.log(operator);
    if (operator == "multiply") return multiply(a, b);
    if (operator == "add") return add(a, b);
    if (operator == "subtract") return subtract(a, b);
    if (operator == "divide") return divide(a, b);

}

function clearButtonClick()
{
    clear();
    display.textContent = "";
}

function getInsertedNumber(params) {
    if (display.textContent == "") return null;
    const result = parseFloat(display.textContent);
    display.textContent = "";
    return result;
}



function digitButtonClick(params) {
    if (numbers.length == 0 || (numbers.length == 1 && operator != null))
    {
        display.textContent += this.dataset.digit;
        roundTheCurrentNumber();
    } else
    {
        throwError();
    }
}

function operatorButtonClick(params) {
    if (numbers.length == 0)
    {
        const result = getInsertedNumber();
        if (result == null)
        {
            throwError();
            return;
        }
        numbers.push(result);
        operator = this.id;
        operatorState();
    } else if (numbers.length == 1 && display.textContent == "")
    {
        operator = this.id;
        operatorState();
    } else throwError();
}

function getCurrentNumberLength(params) {
    return display.textContent.replace(".", "").length;
}

function roundTheCurrentNumber(params) {
    display.textContent = (parseFloat(display.textContent)).toPrecision(Math.min(getCurrentNumberLength(), precision));
}

function equalsButtonClick(params) {
    if (numbers.length == 0 && operator == null)
    {

    } else if (numbers.length == 1 && operator != null)
    {
        
        const result = getInsertedNumber();
        console.log(result);
        if (result == null)
        {
            throwError();
            return;
        }
        numbers.push(result);
        const finalResult = operation(numbers[0], numbers[1]);
        clear();
        if (finalResult != null)
        {
            display.textContent = finalResult;
            roundTheCurrentNumber();
        }
    } else
    {
        throwError();
    }
}

function decimalButtonClick(params) {
    if (!display.textContent.includes(".") && !(display.textContent == "" || errors.includes(display.textContent)))
    {
        display.textContent += ".";
    }
}

function buttonClickDeleteError(params) {
    if (errors.includes(display.textContent))
    {
        display.textContent = "";
    }
}

function highlightButton(params) {
    if (!Array.from(this.classList).includes("hl")) this.classList.add("hl");
}

function stopHighlightButton() {
    if (Array.from(this.classList).includes("hl")) this.classList.remove("hl");
}

function operatorState(params) {
    operatorButtons.forEach(operatorButton => 
    {
        if (operatorButton.id == operator)
        {
            operatorButton.classList.add("hl");
        } else
        {
            operatorButton.classList.remove("hl");
        }
    })
}


const precision = 10;


const numbers = [];
const errors = ["ERROR", "ERROR: YOU JUST DIVIDED BY ZERO"];
let operator = null;

const display = document.querySelector("#display");

const buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener("click", buttonClickDeleteError));
buttons.forEach(button => 
{
    if (!Array.from(button.classList).includes("operatorButton")) button.addEventListener("mousedown", highlightButton)
});
buttons.forEach(button =>
{
    if (!Array.from(button.classList).includes("operatorButton")) button.addEventListener("transitionend", stopHighlightButton)
});

const digitButtons = document.querySelectorAll(".digitButton");
digitButtons.forEach(digitButton => digitButton.addEventListener("click", digitButtonClick));

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", clearButtonClick);

const operatorButtons = document.querySelectorAll(".operatorButton");
operatorButtons.forEach(operatorButton => operatorButton.addEventListener("click", operatorButtonClick));

const equalsButton = document.querySelector("#equals");
equalsButton.addEventListener("click", equalsButtonClick);

const decimalButton = document.querySelector("#decimal");
decimalButton.addEventListener("click", decimalButtonClick);

console.log(getInsertedNumber());