function isIsogram(string){
    let setOfChars = new Set(string.toLowerCase().split(''));
    return setOfChars.size == string.length;
}

console.log('Task 6.5');
console.log(isIsogram('Dermatoglyphics'));
console.log(isIsogram('aba'));
console.log(isIsogram('moOse'));
console.log(isIsogram(''));
