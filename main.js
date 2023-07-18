let operator = '';
let previousValue = '';
let currentValue = '';

const previousDisplayValue = document.querySelector("#previous");
const currentDisplayValue = document.querySelector("#current");

const clear = document.querySelector("#btn-clear");
clear.addEventListener("click", clearDisplay);

const result = document.querySelector("#btn-result");
result.addEventListener("click", () => {
    if(currentValue != "" && previousValue != "") {
        calculate();
    }
});

const dot = document.querySelector("#btn-dot");

const numberBtns = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operators");

numberBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => { 
        handleNumber(e.target.textContent);
    });
});

function handleNumber(number) {
    if(previousValue !== "" && currentValue !== "" && operator === ""){
        previousValue = "";
        currentDisplayValue.textContent = currentValue;
    }
    if (currentValue.length <= 6) {
    currentValue += number;
    currentDisplayValue.textContent = currentValue;
    }
}

operators.forEach((btn) => {
    btn.addEventListener("click", (e) => { 
        handleOperator(e.target.textContent);
    });
});

function handleOperator(op) {
    if (previousValue === "") {
        previousValue = currentValue;
        operatorCheck(op);
    } else if (currentValue === "") {
        operatorCheck(op);
    } else {
        calculate();
        operator = op;
        currentDisplayValue.textContent = "0";
        previousDisplayValue.textContent = previousValue + " " + operator;
    }
}

function calculate() {
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

    if (operator === "+") {
        previousValue += currentValue;
    } else if (operator === "-") {
        previousValue -= currentValue;
    } else if (operator === "/") {
        if (currentValue <= 0) {
            previousValue = "Error :(";
            displayResult();
            return;
        }
        previousValue /= currentValue;
    } else if (operator === "x") {
        previousValue *= currentValue
    }  
    
    previousValue = round(previousValue);
    previousValue = previousValue.toString();
    displayResult();
}

function operatorCheck(text) {
    operator = text;
    previousDisplayValue.textContent = previousValue + " " + operator;
    currentDisplayValue.textContent = "0";
    currentValue = "";
}

function displayResult() {
    if (previousValue.length <= 6) {
        currentDisplayValue.textContent = previousValue;
    } else {
        currentDisplayValue.textContent = previousValue.slice(0,6) + "...";
    }

    previousDisplayValue.textContent = "";
    operator = "";
    currentValue = "";
}

function round(num) {
    return Math.round(num * 100000) / 100000;
  }

function clearDisplay() {
    previousDisplayValue.textContent = "";
    previousValue = "";
    currentDisplayValue.textContent = "0";
    currentValue = "";
    operator = "";
}
