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

// let answer = operate (10, "divide by", 3);

// answer = Math.round (answer * 1e2) / 1e2;

// console.log(answer);

var inputArray = [];
var inputString = "";
var calcString = "";
var equals = false;

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
  //if the input string isn't empty then remove the last character and update the output screen



}

  

function numberButton(number){
  //if the equals flag is true then clear the inputString and set flag to false
  // if (equals = true){
  //   equals = false;
  //   inputString = "";
  // }


  // clear 0 if it is the first element in the input string 
  
  if (inputString === "0") inputString = "";

  //check if there's a dot there and ignore

  if (inputString.includes('.') && number == '.') number = "";

  //if there's just a dot then prefix with a 0

  if (inputString == "" && number == '.') number = "0.";


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


  //replace the last inputArray item if it's already an operator with the new one

  if ((inputArray.slice(-1) == '+' || inputArray.slice(-1) == '-' || inputArray.slice(-1) == 'x' || inputArray.slice(-1) == '/') && (inputString == "")) {
    inputArray.pop();
  }

  //add the contents of the input string to the input array before adding the operator
  if (inputString != "") inputArray.push(inputString);

  //Update the calculation screen
  inputArray.push(operator);
  calculationDiv.textContent = inputArray.join("");

  //clear the input screen
  outputDiv.textContent = "";

  //clear the input string
  inputString = "";

  console.log(inputArray);

}

function equalsButton(){

//If there is just the number in the array then return just the number
//If there is the number and an operator in the array then operate(number, operator, number)
//If there are 3 or more then take the number at element 0, operator at element 1, number at element 2, pass to the operate function
//replace the first three elements of the array with the returned result

var answer;

//add the contents of the input string to the input array before sending to operate()
if (inputString != "") inputArray.push(inputString);
console.log(inputArray[0]);
console.log(inputArray[1]);
console.log(inputArray[2]);


answer = operate(parseFloat(inputArray[0]), inputArray[1], parseFloat(inputArray[2]));

var displayAnswer = Math.round (answer * 1e2) / 1e2;

const outputDiv = document.getElementById("outputScreen");
outputDiv.textContent = displayAnswer;

//set the flag to say that the equals button has been pressed

equals = true;

//replace the inputString with the answer

inputString = displayAnswer.toString();

console.log(answer);




}

