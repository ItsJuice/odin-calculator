function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b){
    return (b != 0 ? a / b : "No dividing by 0!")
};

function operate(a, operator, b){
    switch (operator) {
        case "plus":
            return add(a, b)
        case "minus":
            return subtract(a, b)
        case "times":
            return multiply(a, b)
        case "divide by":
            return divide(a, b)
    };
};

let answer = operate (10, "divide by", 7).toFixed(2);

answer = +answer;

console.log(answer);
