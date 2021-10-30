function toFlatArray(array){
    let result = [];
    for (let i = 0; i < array.length; i++){
        if (Array.isArray(array[i])){
            array[i].forEach((item) => result.push(item));
        }
        else{
            result.push(array[i]);
        }
    }
    result.sort((a,b) => a - b);
    return result;
}

console.log('Task 6.1');
console.log(toFlatArray([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]).toString());
console.log(toFlatArray([]).toString());
console.log(toFlatArray([[], []]).toString());
console.log(toFlatArray([[], [1]]).toString());
console.log(toFlatArray([[1, 3, 5], [-100], [2, 4, 6]]).toString());