let operator = '';
let previousValue = '';
let currentValue = '';

const previousDisplayValue = document.querySelector("#previous");
const currentDisplayValue = document.querySelector("#current");

const clear = document.querySelector("#btn-clear");
const result = document.querySelector("#btn-result");
const dot = document.querySelector("#btn-dot");

const numberBtns = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operators");

numberBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => { 
        handleNumber(e.target.textContent);
    });
});

function handleNumber(number) {
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

function handleOperator(operator) {
    previousValue = currentValue;
    previousDisplayValue.textContent = previousValue + " " + operator;
    currentValue = "";
    currentDisplayValue.textContent = "";
}