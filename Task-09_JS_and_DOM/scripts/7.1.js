function toPhoneNumberHTML(){
    let input = document.getElementById("phone_input").value;
    let array = input.split(' ').map(item => { return Number.parseInt(item); });

    document.getElementById("phone_output").value = toPhoneNumber(array);
}

function toPhoneNumber(digits){
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