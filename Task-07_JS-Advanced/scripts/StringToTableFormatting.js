function stringToTable(r, c, msg){
    let rowLine = '+'.repeat(c + 1).split('').join('---');
    let msgArray = msg.split('');

    let result = rowLine + '\n';
    for (let i = 0; i < r; i++) {
        let row = [];
        for (let j = 0; j < c; j++) {
            let msgIndex = i * c + j;
            if(msgIndex >= msg.length) row.push(' '.repeat(3))
            else row.push(' ' + msgArray[msgIndex] + ' ');
        }
        result+= '|' + row.join('|') + '|' + '\n';
        result+= rowLine + '\n';
    }

    return result;
}

console.log('Task 7.2');
console.log(stringToTable(4, 4, 'Hello World!'));
console.log(stringToTable(4, 3, 'Nice pattern'));
console.log(stringToTable(3, 4, 'Nice pattern'));
console.log(stringToTable(1, 10, 'Nice pattern'));