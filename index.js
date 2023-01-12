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
  inputArray = [];
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

  const outputDiv = document.getElementById("outputScreen");
  const calculationDiv = document.getElementById("calculationScreen");
  var duplicateOperator
  

  //replace the last inputArray item if it's already an operator
  console.log(inputArray.slice(-1), inputArray.length);
  if ((inputArray.slice(-1) == '+' || inputArray.slice(-1) == '-' || inputArray.slice(-1) == 'x' || inputArray.slice(-1) == '/') && (inputString == "")) {
    inputArray.pop();
  }
    if (inputString != "") inputArray.push(inputString);
    inputArray.push(operator);


    calculationDiv.textContent = inputArray.join("");




  console.log(inputArray);

  
  
  //clear the input screen

  outputDiv.textContent = "";

  //clear the input string
  inputString = "";
  
 
}

function dotButton(){
  //check dot button isn't already in the array or there's an operator there and concatenate to a number


}

function equalsButton(){

}

