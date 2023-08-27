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
let last_number = 0;
let operator = '';

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