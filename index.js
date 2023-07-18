const display = document.querySelector('#display');

let displayNum = '0';
let leftNum = '';
let rightNum = '';
let sign = '';

function add(left, right) {
    return +(left) + +(right);
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
    }else{
        return divide(left, right);
    }
}

function updateDisplay(num) {
    // check if button pressed was a backspace
    if(num === 'b' || (displayNum === '0' && num === 0)){
        return;
    }

    // prevent a long stream of 0's at the start
    if(displayNum === '0'){
        displayNum = '';
    }

    // check sign to determine if this is the first math operation
    if(sign === ''){
        leftNum += num;
    }else{
        rightNum += num;
    }
    displayNum += num;
    display.textContent = displayNum;
}