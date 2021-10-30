function toBinaryWord(string){
    let result = [];
    for (let i = 0; i < string.length; i++){
        let charBin = string[i].charCodeAt(0).toString(2);
        result.push('0'.repeat(8 - charBin.length) + charBin);
    }
    return result;
}

console.log('Task 6.2');
console.log(toBinaryWord('man').toString());
console.log(toBinaryWord('AB').toString());
console.log(toBinaryWord('wecking').toString());
console.log(toBinaryWord('Ruby').toString());
console.log(toBinaryWord('Yosemite').toString());


