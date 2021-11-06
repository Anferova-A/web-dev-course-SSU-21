function ToPhoneNumber(digits){
    let errorMsg = 'Invalid input';
    if(!Array.isArray(digits)) return errorMsg + '(argument should be array)';
    if(digits.length != 10) return errorMsg + '(should be 10 items)';
    if(digits.filter(x => {return x > 9 || x < 0; }).length > 0) return errorMsg + '(The numbers must be from 0 to 9)';

    return `+7 (${digits[0]}${digits[1]}${digits[2]}) ${digits[3]}${digits[4]}${digits[5]}-${digits[6]}${digits[7]}-${digits[8]}${digits[9]}`;
}

function isDigitsArray(array){
    array.forEach(item => {
        if(typeof item != 'number'){
            return false;
        }
    });
    return true;
}

console.log('Task 7.1')
console.log(ToPhoneNumber([9, 0, 0, 1, 1, 1, 2, 2, 3, 3] ));
console.log(ToPhoneNumber([9, 2, 7, 5, 5, 5, 6, 6, 9, 0] ));
console.log(ToPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, -11]));
console.log(ToPhoneNumber([]));
console.log(ToPhoneNumber('aw93fha='));
console.log(ToPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(ToPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, '9']));