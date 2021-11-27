function generatePass(){
    let nums = "0123456789";
    let lowLetters = "abcdefghiklmnopqrstuvwxyz";
    let upLetters = lowLetters.toUpperCase();

    let length = rnd(6, 20);
    let lowCount = rnd(1, length - 2);
    let upCount = rnd(1, length - lowCount - 1);
    let numCount = rnd(1, length - lowCount - upCount);

    let passChars = randomString(nums, numCount);
    passChars += randomString(lowLetters, lowCount);
    passChars += randomString(upLetters, upCount);

    let resultArray = passChars.split('');
    shuffleArray(resultArray);

    return resultArray.join('');
}

function rnd(min, max){
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function randomString(str, count){
    let result = '';
    for(let i = 0; i < count; i++){
        result+= randomChar(str);
    }
    return result;
}
function randomChar(str){
    return str[rnd(0, str.length - 1)];
}

console.log("Task 8.1");
console.log(generatePass());