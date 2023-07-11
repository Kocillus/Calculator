let operator = '';
let previousValue = '';
let currentValue = '';

document.addEventListener("DOMContentLoaded", function() {
    let clear = document.querySelector("#btn-clear");
    let del = document.querySelector("#btn-del");
    let split = document.querySelector("#btn-split");
    let multiplication = document.querySelector("#btn-multi");
    let subtraction = document.querySelector("#btn-subtraction");
    let add = document.querySelector("#btn-add");
    let result = document.querySelector("#btn-result");
    let dot = document.querySelector("#btn-dot"); 

    let previousScreen = document.getElementById("previous")
    let currentScreen = document.getElementById("#current")

    let numbers = document.querySelectorAll(".numbers");
    let operators = document.querySelectorAll(".operators")

    numbers.forEach((number) => number.addEventListener("click", function(e) {
        handleNumber(e.target.textContent)
        currentScreen.textContent = currentValue;
    }))

    operators.forEach((op) => op.addEventListener("click", function(e) {
        handleOperator(e.target.textContent)
        previousScreen.textContent = previousValue + " " + operator;
        currentScreen.textContent = currentValue;
    }))

    clear.addEventListener("click", function() {
        previousValue = '';
        currentValue = '';
        previousScreen.textContent = currentValue;
        currentScreen.textContent = currentValue;
    })

    result.addEventListener("click", function(){
        calculate()
    })

})

function handleNumber(num) {
    if(currentValue.length <= 5) {
    currentValue += num;
    }
}

function handleOperator(op) {
    operator = op;
    previousValue = currentValue;
    currentValue = '';
}

function calculate() {
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

    document.getElementById("btn-add").addEventListener("click", (e) => {
        operator === "+";
    });

    document.getElementById("btn-subtraction").addEventListener("click", (e) => {
        operator === "-";
    });

    document.getElementById("btn-multi").addEventListener("click", (e) => {
        operator === "x";
    });

    document.getElementById("btn-split").addEventListener("click", (e) => {
        operator === "/";
    });

    switch(operator) {
        case operator === "+":
            previousValue += currentValue;
        
        case operator === "-":
            previousValue -= currentValue;

        case operator === "x":
            previousValue *= currentValue;
        
        case operator === "/":
            previousValue /= currentValue;
    }

    console.log(previousValue)
}