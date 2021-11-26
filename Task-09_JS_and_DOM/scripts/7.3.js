function getBinomFormulaHTML(){
    let input = document.getElementById("formula_input").value;
    let value = Number.isInteger(Number.parseInt(input)) ? BigInt(input) : '';
    document.getElementById("formula_output").innerHTML = getBinomFormula(value);
}

function getBinomFormula(pow){
    if(typeof pow != "bigint") return 'Invalid input (input argument should has BigInt type)';
    if(pow > 200n || pow < -200n) return 'Invalid input (input value should be from -200 to 200)';
    if(pow == 0) return '1';

    let n = abs(pow);

    let formula = [];
    for (let k = 0n; k <= n; k++) {
        formula.push(getC(k, n) + getStringPower('a', n - k) + getStringPower('b', k)); 
    }
    let result = formula.join('+');

    if(pow < 0n){
        result = `1/(${result})`;
    }

    return result;
}

function abs(n){
    return n < 0 ? n * -1n : n;
}

function getC(n, m){
    let c = factorial(m)/(factorial(m - n) * factorial(n));
    return c == 1 ? '' : c;
}

function getStringPower(symb, pow){
    if(pow == 0n) return '';
    if(pow == 1n) return symb;
    return `${symb}^${pow}`;
}

function factorial(n) {
    return (n > 1n) ? n * factorial(n - 1n) : 1n;
  }
