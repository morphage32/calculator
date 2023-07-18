const display = document.querySelector('#display');

let displayNum = '0';
let lastOperation;
let leftNum;
let rightNum;
let sign = '';

function add(left, right) {
    return left + right;
}

function subtract(left, right) {
    return left - right;
}

function multiply(left, right) {
    return left * right;
}

function divide(left, right) {
    return left / right;
}

function operate(left, right, sign) {
    if(sign === "+"){
        return add(left, right);
    }else if(sign === "-"){
        return subtract(left, right);
    }else if(sign === "*"){
        return multiply(left, right);
    }else if(sign === "/"){
        return divide(left, right);
    }else{
        return left;
    }
}

function updateDisplay(num) {
    // prevent a long stream of 0's at the start
    if(displayNum === '0' && num === 0){
        return;
    }

    // remove the starting zero when adding first number
    if(displayNum === '0'){
        displayNum = '';
    }

    displayNum += num;
    display.textContent = displayNum;
}

function updateOperator(newSign) {
    if(sign === ''){
        sign = newSign;
        leftNum = parseInt(displayNum);
    }else{
        rightNum = parseInt(displayNum);
        display.textContent = leftNum = operate(leftNum, rightNum, sign);
        sign = newSign;
    }
    displayNum = '0';
}