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

// let answer = operate (10, "divide by", 3);

// answer = Math.round (answer * 1e2) / 1e2;

// console.log(answer);

var inputArray = [];
var inputString = "";
var calcString = "";

function clearScreen() {
  //clear the input array

  //clear the screens
  const outputDiv = document.getElementById("outputScreen");
  outputDiv.textContent = "0";
  const calculationDiv = document.getElementById("calculationScreen");  
  calculationDiv.textContent  = "";
  inputString = "";

}

function backSpace() {
  //remove the last number
}

  

function numberButton(number){
  // clear 0 if it is the first element in the input string 
  // console.log(inputString.charAt(0));
  
  if (inputString === "0") inputString = "";


  //append the input number to the input string
  inputString += number;

  //send the input string to the input screen
  const outputDiv = document.getElementById("outputScreen");
  outputDiv.textContent  = inputString;


  //send the input number to the calculation screen
  const calculationDiv = document.getElementById("calculationScreen");  
  calculationDiv.textContent += number;
  
}

function operatorButton(operator){
  //check that the last element in the inputArray is a number and not a dot or another operator
  
  //clear the input screen
  const outputDiv = document.getElementById("outputScreen");
  outputDiv.textContent = "";

  //clear the input string
  inputString = "";
  
  //add the operator string to the 
  // const calcString = operator;
  const calculationDiv = document.getElementById("calculationScreen");
  calculationDiv.textContent += operator;
}

function dotButton(){

}

function equalsButton(){

}

