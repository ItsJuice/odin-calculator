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
  return (b != 0 ? a / b : "divZero")
};

function operate(a, operator, b){
  switch (operator) {
    case "+":
      return add(a, b)
    case "-":
      return subtract(a, b)
    case "x":
      return multiply(a, b)
    case "/":
      return divide(a, b)
  };
};



var inputArray = [];
var inputString = "";
var calcString = "";
var equals = false;
var answer;
var displayAnswer;

function clearScreen() {
  inputArray = [];
  inputString = "";

  const outputDiv = document.getElementById("outputScreen");
  outputDiv.textContent = "0";
  const calculationDiv = document.getElementById("calculationScreen");  
  calculationDiv.textContent  = "";

}

function backspaceButton() {
  //if the input string isn't empty and the last action wasn't 'equals' then remove the last character and update the output screen
  if (inputString != "" && inputArray.slice(-1) != "=") {
    inputString = inputString.slice(0,-1);
    const outputDiv = document.getElementById("outputScreen");
    outputDiv.textContent  = inputString;
  }
}

function numberButton(number){

  //if the equals button is the last button pressed, clear the inputArray and inputString
  if (inputArray.slice(-1) == "=") {
    clearScreen();
  }

  //clear 0 if it is the first element in the input string 
  if (inputString === "0") inputString = "";

  //prevent more than one dot
  if (inputString.includes('.') && number == '.') number = "";

  //if there's just a dot then prefix with a 0
  if (inputString == "" && number == '.') number = "0.";


  //append the input number to the input string
  inputString += number;

  //send the input string to the input screen
  const outputDiv = document.getElementById("outputScreen");
  outputDiv.textContent  = inputString;
  
}

function operatorButton(operator){

  const calculationDiv = document.getElementById("calculationScreen");
  const outputDiv = document.getElementById("outputScreen");

  // if equals is the last button pressed then the answer becomes the number to be operated on
  if (inputArray.slice(-1) == "=") {
    inputString = inputArray[0];
    inputArray = [];
  }
  
  // if the operator is the first button pressed, use 0 as the first number
  if (inputArray.length == 0 && inputString == "") {
    inputString = "0";
  }

  //clicking more than one operator button just uses the moost recent one clicked
  if ((inputArray.slice(-1) == '+' || inputArray.slice(-1) == '-' || inputArray.slice(-1) == 'x' || inputArray.slice(-1) == '/') && (inputString == "")) {
    inputArray.pop();
  }

  //add the contents of the input string to the input array before adding the operator
  if (inputString != "") inputArray.push(inputString);

  //update the calculation screen with the inputString
  calculationDiv.textContent = inputArray.join("");

  // calculate the running total
  calculateRunningTotal();

  //send displayAnswer to the outputScreen
  outputDiv.textContent = displayAnswer;

  //Update the input Array with the operator
  inputArray.push(operator);

  //Update the calculation screen with the Array
  calculationDiv.textContent = inputArray.join("");

  //clear the input string
  inputString = "";

  checkDivideByZero();

}

function calculateRunningTotal() {

  const outputDiv = document.getElementById("outputScreen");

  if ((inputArray.length === 0 ) && (inputString == "")) { //if there is nothing in inputArray and inputString then answer = 0
    answer = 0;
  }
  else if (inputArray.length === 1){//if there is one number in inputArray the answer is that number
    answer = inputArray[0];
  }
  else if ((inputArray.slice(-1) == '+' || inputArray.slice(-1) == '-' || inputArray.slice(-1) == 'x' || inputArray.slice(-1) == '/') && (inputString == "")) {
    answer = operate(parseFloat(inputArray[0]), inputArray[1], parseFloat(inputArray[0]));
    //check if the last input is an operator in which case the second operand is the same as the first
  }
  else if ((inputArray.length === 0 ) && (inputString !== "")) { //for when a number is pressed then the equals button, the number is the answer
    answer = inputString;
  }
  else {
    inputArray.push(inputString);
    answer = operate(parseFloat(inputArray[0]), inputArray[1], parseFloat(inputArray[2])); // calculate the answer from the 3 elements of the array
  }

  inputArray = [answer];

  displayAnswer = Math.round (answer * 1e5) / 1e5;


}

function checkDivideByZero(){
  const outputDiv = document.getElementById("outputScreen");
  if (answer == "divZero"){
  clearScreen();
  outputDiv.textContent = 'No dividing by 0!';

}
}

function equalsButton(){
  const outputDiv = document.getElementById("outputScreen");
  const calculationDiv = document.getElementById("calculationScreen");

  //ignore if '=' is the last button pressed
  if (inputArray.slice(-1) == "=") {
    return;
  }

  calculateRunningTotal();

  checkDivideByZero();

  calculationDiv.textContent += inputString;

  inputString = displayAnswer.toString();

  outputDiv.textContent = displayAnswer;

  //replace the inputArray with the answer and a flag to show it was an equals result

  inputArray = [inputString, "="];


}