let firstNum, secondNum;
function add(num1, num2){
    return num1 + num2
}

function subtract(num1, num2){
    return num1 -num2
}
function multiply(num1, num2){
    return num1 * num2
}
function divide(num1, num2){
    return num1/num2
}
function operator(op, num1, num2){
    switch (op){
        case '/': {
            return divide(num1, num2)
        
        }
        case '+':{
            return add(num1, num2)
        
        }
        case '-': {
            return subtract(num1, num2)
        
        }
        case '*': {
            return multiply(num1, num2)
        
        }
        default:{
            alert('Invalid Operator')
        }
    }
}

const digitContainer = document.querySelector('.digits-container')
const digits = Array.from(digitContainer.querySelectorAll('button'))
const display = document.querySelector('#number-display')

digits.forEach(digit => digit.addEventListener('click', addToDisplay))

function addToDisplay(e){
    var num = (e.target.getAttribute('id'))
    display.value = display.value + num
}

const functionContainer = document.querySelector('.function-container')
const functions = Array.from(functionContainer.querySelectorAll('button'))
functions.forEach(func => func.addEventListener('click', addOperation))
function addOperation(e){
    var operationDisplay = (e.target.textContent)
    //var operation = e.target.getAttribute('id')
    display.value = display.value + operationDisplay

}

const equalBtn = document.querySelector('#equals')
equalBtn.addEventListener('click', doOperation)
function doOperation(e){
    var expression = Array.from(display.value)
    var operationAt = expression.findIndex(function(char){ 
        return char == '+' || char == '-' || char == 'x' || char == '/' 
    })
    firstNum = Number(expression.slice(0, operationAt).join(''))
    secondNum = Number(expression.slice(operationAt + 1).join(''))
    operation = expression[operationAt]
    // console.log('firstNum is: ' + firstNum)
    // console.log('secondNum is: ' + secondNum)
    // console.log('operation is: ' + operation)
    // console.log('result is: ' + operator(operation, firstNum, secondNum))
    finalNum = operator(operation, firstNum, secondNum)
    display.value = finalNum
}
