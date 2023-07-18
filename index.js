const display = document.querySelector('#display');

let displayNum = '0';
let leftNum;
let rightNum;
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