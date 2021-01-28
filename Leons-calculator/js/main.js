console.log("calculator is on");

let calculator = {
    variables : {
        previousNumber : "",
        currentNumber : "",
        currentOperator : "",
    },
    display : {
        previousNumberAndOperator : document.querySelector("#previousNumberAndOperator"),
        currentNumber : document.querySelector("#currentNumber"),
        showOnCurrentNumber : (value) => {
            calculator.display.currentNumber.innerText = value;
        },
        showOnPreviousNumberAndOperator : (value) => {
            calculator.display.previousNumberAndOperator.innerText = value;
        },
    },
    numbers : {
        everyNumber : document.querySelectorAll(".number"),
        concatenation: (e) => {
            calculator.variables.currentNumber += e.target.dataset.value;
            calculator.display.showOnCurrentNumber(calculator.variables.currentNumber)
        },
        
    },
    operations : {
        everyOperation : document.querySelectorAll(".operation"),
        check: (e) => {
            if(!calculator.variables.currentOperator && !calculator.variables.previousNumber){
                calculator.variables.currentOperator = e.target.dataset.value;
                calculator.display.showOnPreviousNumberAndOperator(calculator.variables.currentNumber + e.target.dataset.value);
                calculator.variables.previousNumber = calculator.variables.currentNumber;
                calculator.variables.currentNumber = "";
                calculator.display.showOnCurrentNumber("");
            } else if (!calculator.variables.currentOperator && calculator.variables.previousNumber){
                calculator.variables.currentOperator = e.target.dataset.value;
                calculator.display.showOnPreviousNumberAndOperator(calculator.variables.previousNumber + e.target.dataset.value)
                calculator.display.showOnCurrentNumber("");
            } else if(calculator.variables.currentOperator){
                calculator.operations.operate(calculator.variables.currentOperator);
                calculator.display.showOnPreviousNumberAndOperator(calculator.variables.previousNumber + e.target.dataset.value);
                calculator.display.showOnCurrentNumber("");
                calculator.variables.currentOperator = e.target.dataset.value;
                console.table(calculator.variables)
            }
        },
        operate : (operation) => {
            switch(operation){
                case ("+"):
                    let addition = Number(calculator.variables.previousNumber) + Number(calculator.variables.currentNumber);
                    calculator.display.showOnCurrentNumber(addition);
                    calculator.display.showOnPreviousNumberAndOperator("");
                    calculator.variables.previousNumber = addition;
                    calculator.variables.currentNumber = "";
                    calculator.variables.currentOperator = "";
                    break;
                case("-"):
                    let subtraction = Number(calculator.variables.previousNumber) - Number(calculator.variables.currentNumber);
                    calculator.display.showOnCurrentNumber(subtraction);
                    calculator.display.showOnPreviousNumberAndOperator("");
                    calculator.variables.previousNumber = subtraction;
                    calculator.variables.currentNumber = "";
                    calculator.variables.currentOperator = "";
                    break;
                case("*"):
                    let multiplication = Number(calculator.variables.previousNumber) * Number(calculator.variables.currentNumber);
                    calculator.display.showOnCurrentNumber(multiplication);
                    calculator.display.showOnPreviousNumberAndOperator("");
                    calculator.variables.previousNumber = multiplication;
                    calculator.variables.currentNumber = "";
                    calculator.variables.currentOperator = "";
                    break;
                case("/"):
                    let division = Number(calculator.variables.previousNumber) / Number(calculator.variables.currentNumber);
                    calculator.display.showOnCurrentNumber(division);
                    calculator.display.showOnPreviousNumberAndOperator("");
                    calculator.variables.previousNumber = division;
                    calculator.variables.currentNumber = "";
                    calculator.variables.currentOperator = "";
                    break;
            }
        },
    },
    executions : {
        everyExecution : document.querySelectorAll(".execute"),
        executionFork : (e) => {
            if(e.target.dataset.value === "enter"){
                console.table(calculator.variables)
                calculator.operations.operate(calculator.variables.currentOperator);

            } else if (e.target.dataset.value === "clear-all"){
                calculator.variables.previousNumber = "";
                calculator.variables.currentNumber = "";
                calculator.variables.currentOperator = "";
                calculator.display.showOnCurrentNumber("");
                calculator.display.showOnPreviousNumberAndOperator("");
                //limpar o innerText do display
            }
        }
    },
    
}

calculator.numbers.everyNumber.forEach(number => {
    number.addEventListener("click", calculator.numbers.concatenation)
})

calculator.operations.everyOperation.forEach(operation => {
    operation.addEventListener("click", calculator.operations.check)
})

calculator.executions.everyExecution.forEach(execution => {
    execution.addEventListener("click", calculator.executions.executionFork)
})