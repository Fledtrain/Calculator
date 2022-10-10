class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
  }

  //Clears out different variables
  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  //removing a single number
  delete() {}

  //Whenever a user clicks on a number
  appendNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }



  //Anytime a user clicks on a operation
  chooseOperation(operation) {
    this.operation = operation
    this.previousOperand = this.currentOperand
    this.currentOperand = ''


  }

  //computing a single value
  compute() {}

  //Updates the output display
  updateDisplay() {
    this.currentOperandTextElement.innerText = this.currentOperand;
  }
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousOperandTextElement = document.querySelector(
  "[data-previous-operand]"
);
const currentOperandTextElement = document.querySelector(
  "[data-current-operand]"
);

const calculator = new Calculator(
  previousOperandTextElement,
  currentOperandTextElement
);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    //adding event listener for on click
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay(); //display values will be constantly updated
  });
});

operationButtons.forEach((button) => {
    button.addEventListener("click", () => {
      //adding event listener for on click
      calculator.chooseOperation(button.innerText);
      calculator.updateDisplay(); //display values will be constantly updated
    });
  });
  