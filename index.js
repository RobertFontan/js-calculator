let firstNum, secondNum, operation;
let converter = {
    add:'+',
    subtract: '-',
    divide: '/',
    multiply: 'x'
}

function add(num1, num2){
    return Number(num1) + Number(num2)
}

function subtract(num1, num2){
    return num1 - num2
}
function multiply(num1, num2){
    return num1 * num2
}
function divide(num1, num2){
    return num1/num2
}
function operator(op, num1, num2){
    switch (op){
        case 'x': {
            return multiply(num1, num2)
        
        }
        case '/': {
            return divide(num1, num2)
        
        }
        case '+':{
            return add(num1, num2)
        
        }
        case '-': {
            return subtract(num1, num2)
        
        }
        default:{
            console.log(op)
            alert('Invalid Operator')
        }
    }
}

const digitContainer = document.querySelector('.digits-container')
const digits = Array.from(digitContainer.querySelectorAll('button'))
const display = document.querySelector('#number-display')

digits.forEach(digit => digit.addEventListener('click', addToDisplay))

function addToDisplay(e){
    var num = Number(e.target.getAttribute('id'))
    console.log('operation is: ' + operation)
    if(operation != undefined){
        display.value = '' // if operation is defined
    }
    console.log('num value is: ' + num)
    display.value = display.value + num
    console.log('display value: ' + display.value)    
    
}

const functionContainer = document.querySelector('.function-container')
const functions = Array.from(functionContainer.querySelectorAll('button'))
functions.forEach(func => func.addEventListener('click', addOperation))
function addOperation(e){
    var symbol = e.target.getAttribute('id')
    operation = converter[symbol]

    if(firstNum == undefined) {
        firstNum = display.value
        console.log('found firstNum: ' + firstNum)
    }
    
    var symbol = e.target.getAttribute('id')
    operation = converter[symbol]
    //operation = e.target.getAttribute('id')
    //display.value = display.value + operationDisplay

}

const equalBtn = document.querySelector('#equals')
equalBtn.addEventListener('click', doOperation)
function doOperation(e){
    // var expression = Array.from(display.value)

    // var operationAt = expression.findIndex(function(char){ 
    //     return char == '+' || char == '-' || char == 'x' || char == '/' 
    // })
    // firstNum = Number(expression.slice(0, operationAt).join(''))
    // secondNum = Number(expression.slice(operationAt + 1).join(''))
    secondNum = display.value
    console.log('found secondNum: ' + secondNum)
    console.log('firstNum is: ' + firstNum + ' secondNum is: ' + secondNum)
    try{
        finalNum = operator(operation, firstNum, secondNum)
    }
    catch (error){
        console.error(error)
    }
    console.log('finalNum is: ' + finalNum)
    display.value = finalNum
    resetCalc()
}

function resetCalc(){
    firstNum = finalNum
    secondNum = undefined
    finalNum = undefined
    operation = undefined
}
const clearBtn = document.querySelector('#clear')
clearBtn.addEventListener('click', clearDisplay)
function clearDisplay(e){
    display.value = ""
    operation = undefined
    secondNum = undefined
    firstNum = undefined
    finalNum = undefined
}
