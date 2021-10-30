function format(string){
    let result = [];
    string.split('').forEach((item, index) => result.push(item.toUpperCase() + item.repeat(index)));
    return result.join('-');
}

console.log('Task 6.4');
console.log(format('abcd'));
console.log(format('RqaEzty'));
console.log(format('cwAt'));
