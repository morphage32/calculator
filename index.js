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
    // prevent more than 16 digits at a time
    if(displayNum.length > 15){
        return;
    }

    // starts a new math operation if equals button was pressed last
    if(sign === '='){
        sign = '';
    }

    // prevent a long stream of 0's at the start
    if(displayNum === '0' && num === 0){
        display.textContent = '0';
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
        leftNum = parseFloat(displayNum);
    }else if(sign === '=' && newSign === '='){
        // this allows equals button to repeat last math operation when pressed again
        display.textContent = leftNum = operate(leftNum, rightNum, lastOperation);
    }else{
        rightNum = parseFloat(displayNum);
        // check for divide by zero
        if(sign === '/' && rightNum === 0){
            errorOut(0);
            return;
        }
        display.textContent = leftNum = operate(leftNum, rightNum, sign);
        lastOperation = sign;
        sign = newSign;
    }

    // limits calculations to 16 digits
    if(display.textContent.length > 16){
        leftNum = leftNum.toPrecision(16);
        display.textContent = leftNum;
    }

    if(display.textContent.includes('e')){
        errorOut(1);
    }

    displayNum = '0';
}

function clearDisplay() {
    leftNum = rightNum = undefined;
    sign = '';
    displayNum = '0';
    display.textContent = displayNum;
}

function backSpace() {
    if(displayNum.length === 1){
        displayNum = '0';
    }else{
        displayNum = displayNum.slice(0, -1);
    }
    display.textContent = displayNum;
}

function addDecimal() {
    if(!displayNum.includes('.')){
        displayNum += '.'
        display.textContent = displayNum;
    }
}

function toggleNegative() {
    if(displayNum === '0'){
        return;
    }
    if(displayNum.charAt(0) === '-'){
        displayNum = displayNum.slice(1, displayNum.length);
    }else{
        displayNum = '-' + displayNum;
    }

    display.textContent = displayNum;
}

function errorOut(code) {
    leftNum = rightNum = undefined;
    sign = '';
    displayNum = '0';

    if(code === 0){
        display.textContent = 'N0.';
    }else{
        display.textContent = 'ERROR';
    }
}