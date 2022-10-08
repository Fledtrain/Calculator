class Calculator{
    constructor(previousOperandTextElement,currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()


    }

    //Clears out different variables
    clear(){
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined 
    }

    //removing a single number 
    delete(){

    }
    //Whenever a user clicks on a number 
    appendNumber(number){

    }

    //Anytime a user clicks on a operation
    chooseOperation(operation){

    }

    //computing a single value
    compute(){


    }

    //Updates the output display
    updateDisplay(){

    }
}







const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')
