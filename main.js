let operator = '';
let previousValue = '';
let currentValue = '';

window.addEventListener("keydown", handleKeyboard);

const previousDisplayValue = document.querySelector("#previous");
const currentDisplayValue = document.querySelector("#current");

const clear = document.querySelector("#btn-clear");
clear.addEventListener("click", clearDisplay);

const deleteBtn = document.querySelector("#btn-del");
deleteBtn.addEventListener("click", delLastNumber);

const result = document.querySelector("#btn-result");
result.addEventListener("click", () => {
    if(currentValue != "" && previousValue != "") {
        calculate();
    }
});

const dot = document.querySelector("#btn-dot");
dot.addEventListener("click", () => {
    addDot();
})

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
    if (currentValue.length <= 10) {
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

function handleKeyboard(e) {
    e.preventDefault();
    if (e.key >= 0 && e.key <= 9) {
        handleNumber(e.key);
      }
    if(e.key === "Enter" || 
    currentValue !="" && previousValue !="") {
        calculate();
    }
    if(e.key === "+" || e.key === "-" || e.key === "/") {
        handleOperator(e.key);
    }
    if(e.key === "x" || e.key === "*") {
        handleOperator("x");
    }
    if(e.key === "." || e.key === ",") {
        addDot();
    }
    if(e.key ==="Backspace") {
        delLastNumber();
    }}

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
    if (previousValue.length <= 10) {
        currentDisplayValue.textContent = previousValue;
    } else {
        currentDisplayValue.textContent = previousValue.slice(0,10) + "...";
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

function addDot() {
    if(!currentValue.includes(".")) {
        currentValue += "."
        currentDisplayValue.textContent = currentValue;
    }
}

function delLastNumber() {
    if(currentValue != "") {
        currentValue = currentValue.slice(0,-1);
        currentDisplayValue.textContent = currentValue;
    }
    if(currentValue === "") {
        currentDisplayValue.textContent =  "0";
    }}
    if (currentValue === "" && previousValue !== "" && operator === "") {
        previousValue = previousValue.slice(0,-1);
        currentDisplayValue.textContent = previousValue;
    }