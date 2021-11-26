function toPhoneNumberHTML(){
    let input = document.getElementById("phone_input").value;
    let array = input.split(' ').map(item => { return Number.parseInt(item); });

    document.getElementById("phone_output").value = toPhoneNumber(array);
}

function toPhoneNumber(digits){
    let errorMsg = 'Не очень правильный ввод';
    if(!Array.isArray(digits)) return errorMsg + ' (пожалуйста, пусть это будет массив)';
    if(digits.length != 10) return errorMsg + ' (пожалуйста, введите 10 циферок через пробел)';
    if(digits.filter(x => {return x > 9 || x < 0 || !Number.isInteger(x); }).length > 0) return errorMsg + ' (цифры должны быть цифрами)';

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