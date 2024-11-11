/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let num1=0;
let num2=0;
let operator='';
/*------------------------ Cached Element References ------------------------*/
const calculator = document.querySelector("#calculator");
const display = document.querySelector(".display");
const buttons = document.querySelectorAll('.button');
const calculate = {
    "+": function (a, b) { return a + b },
    "-": function (a, b) { return a - b },
    "*": function (a, b) { return a * b },
    "/": function (a, b) { return a / b },
};
/*----------------------------- Event Listeners -----------------------------*/

  calculator.addEventListener("click", (event) => {
    console.log(event.target.innerText);

    if (event.target.classList.contains("number")) {
        
        if (display.textContent === "0" || display.textContent === "") {
            display.textContent = event.target.innerText;
        } else {
            display.textContent += event.target.innerText; 
        }
    }

    if (event.target.classList.contains("operator") && event.target.textContent !== "C") {
        num1 = parseInt(display.textContent);
        operator = event.target.textContent;
        display.textContent = "0";
    }

    if (event.target.innerText === "=") {
        num2 = parseInt(display.textContent);
        display.textContent = calculate[operator](num1, num2);
        num1 = parseInt(display.textContent);
        num2 = 0;
        operator = "";
    }

    if (event.target.innerText === "C") {
        num1 = 0;
        num2 = 0;
        operator = "";
        display.textContent = "0";
    }
});

/*-------------------------------- Functions --------------------------------*/

