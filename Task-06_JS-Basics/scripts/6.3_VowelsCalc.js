function vowelsCalc(string){
    let vowels = new Set(['a','e','i', 'o', 'u']);
    let result = 0;
    string.toLowerCase()
          .split('')
          .forEach((item) => {
          if (vowels.has(item)){
              result++;
          }
    });
    return result;
}

console.log('Task 6.3');
console.log(vowelsCalc('abracadabra'));
console.log(vowelsCalc('ABRACADABRA'));
console.log(vowelsCalc('o a kak ushakov lil vo kashu kakao'));
console.log(vowelsCalc('my pyx'));
