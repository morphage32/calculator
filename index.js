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

let leftNum = '';
let rightNum = '';
let sign = '';