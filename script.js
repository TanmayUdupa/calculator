function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let first_number = 0;
let last_number = 'a';
let operator = '';
let result = 0;

function operate(op, a, b) {
    if (op === '+')
    {
        return add(a, b);
    }
    else if (op === '-')
    {
        return subtract(a, b);
    }
    else if (op === "*")
    {
        return multiply(a, b);
    }

    return divide(a, b);
}

let display_value = 0;

let op_check = 0;
let text_check = 0;
let sol_obtained = 0;

function display(x)
{
    disp = document.querySelector(".display");
    if (disp.style.color === "red")
    {
        disp.style.color = "black";
        disp.style.fontSize = "50px";
    }

    if (disp.textContent === "0" || (op_check === 1 && text_check === 1) || soln_obtained === 1)
    {
        disp.textContent = x;
        text_check = 0;
        soln_obtained = 0;
    }
    else
    {
        if (disp.textContent[disp.textContent.length - 1] === '.' && x === '.')
        {
            alert("You cannot enter a decimal point again after entering a decimal point");
            return;
        }
        disp.textContent += x;
    }
    display_value = disp.textContent * 1;
    if (op_check === 0)
    {
        first_number = display_value;
    }
    else
    {
        last_number = display_value;
    }
}

function oper(x)
{
    if (operator !== '')
    {
        if (last_number === 'a')
        {
            alert("Please enter a number for second operand");
            return;
        }
        first_number = operate(operator, first_number, last_number);
        last_number = 'a';
        disp = document.querySelector(".display");
        disp.textContent = first_number;
    }
    
    if (x === '÷')
    {
        operator = '/';
    }
    else if (x === '×')
    {
        operator = '*';
    }
    else
    {
        operator = x;
    }
    op_check = 1;
    text_check = 1;
}

function solve()
{
    if (last_number === 'a')
    {
        alert("Please enter operation before pressing '='");
        return;
    }
    result = operate(operator, first_number, last_number);
    text_check = 1;
    if (!(Number.isInteger(result)))
    {
        result = result.toFixed(3);
    }
    else if (result.toString().length > 8)
    {
        result = result.toExponential();
    }
    else if (!isFinite(result))
    {
        disp = document.querySelector(".display");
        disp.textContent = "Division by zero error!!!";
        disp.style.color = "red";
        disp.style.fontSize = "34px";
        soln_obtained = 1;
        op_check = 0;
        first_number = result;
        text_check = 0;
        last_number = 'a';
        operator = '';
        return;
    }
    display(result);
    soln_obtained = 1;
    op_check = 0;
    first_number = result;
    text_check = 0;
    last_number = 'a';
    operator = '';
}

function clear()
{
    disp = document.querySelector(".display");
    if (disp.style.color === "red")
    {
        disp.style.color = "black";
        disp.style.fontSize = "50px";
    }
    soln_obtained = 0;
    op_check = 0;
    first_number = 0;
    text_check = 0;
    last_number = 'a';
    operator = '';
    disp = document.querySelector(".display");
    disp.textContent = 0;
}

num = document.querySelectorAll(".num, .dec");

num.forEach((number) => (number.addEventListener('click', function () {display(number.textContent)})));

op = document.querySelectorAll(".op");

op.forEach((operator) => (operator.addEventListener('click', function() {oper(operator.textContent)})));

sol = document.querySelector(".sol");
sol.addEventListener('click', solve);

clr = document.querySelector(".clear");
clr.addEventListener('click', clear);