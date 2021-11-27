function feel(a, operator, b){
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return (a - a % b) / b;
    }
}

function zero(expression) {
    const num = 0;
    return typeof expression != 'undefined' ? feel(num, expression[0], expression[1]) : num;
}
function one(expression) {
    const num = 1;
    return typeof expression != 'undefined' ? feel(num, expression[0], expression[1]) : num;
}
function two(expression) {
    const num = 2;
    return typeof expression != 'undefined' ? feel(num, expression[0], expression[1]) : num;
}
function three(expression) {
    const num = 3;
    return typeof expression != 'undefined' ? feel(num, expression[0], expression[1]) : num;
}
function four(expression) {
    const num = 4;
    return typeof expression != 'undefined' ? feel(num, expression[0], expression[1]) : num;
}
function five(expression) {
    const num = 5;
    return typeof expression != 'undefined' ? feel(num, expression[0], expression[1]) : num;
}
function six(expression) {
    const num = 6;
    return typeof expression != 'undefined' ? feel(num, expression[0], expression[1]) : num;
}
function seven(expression) {
    const num = 7;
    return typeof expression != 'undefined' ? feel(num, expression[0], expression[1]) : num;
}
function eight(expression) {
    const num = 8;
    return typeof expression != 'undefined' ? feel(num, expression[0], expression[1]) : num;
}
function nine(expression) {
    const num = 9;
    return typeof expression != 'undefined' ? feel(num, expression[0], expression[1]) : num;
}


function plus(arg) {
    return ['+', arg];
}
function minus(arg) {
    return ['-', arg];
}
function times(arg) {
    return ['*', arg];
}
function dividedBy(arg) {
    return ['/', arg];
}


console.log('Task 8.3');
console.log(seven(times(five())));
console.log(four(plus(nine())));
console.log(eight(minus(three())));
console.log(six(dividedBy(two())));
console.log(eight(dividedBy(three())));
console.log(three(times(three(times(three())))));
console.log(two(plus(two(times(two(minus(one())))))));
console.log(zero(plus(one(dividedBy(one())))));
console.log(one(dividedBy(zero())));
console.log(one());