function formatStringToTableHTML(){
    let rows = document.getElementById("table_rows_input").value;
    let columns = document.getElementById("table_columns_input").value;
    let text = document.getElementById("table_text_input").value;

    let errorOutput = document.getElementById("string-table_error_output");
    
    errorOutput.value = "";
    if(rows == ''){
        errorOutput.value = 'Я не знаю сколько нужно строк :(';
        return;
    }
    else if(columns == ''){
        errorOutput.value = 'Я не знаю сколько нужно столбцов :(';
        return;
    }
    

    let array = getTableArray(rows,columns, text);
    document.getElementById("string-table_output").innerHTML = getHTMLTable(array);
}

function parseInput(input){  
    let result = [];
    result.push(Number.parseInt(input[0]));
    result.push(Number.parseInt(input[1]));
    let text = '';
    for(let i = 2; i < input.length; i++){
        text+= input[i] + ' ';
    }
    result.push(text);

    return result;
}

function formatStringToTable(rows, columns, text){
    if(!validateSizes(rows, columns)){
        return "Не очень правильный ввод";
    }

    let array = getTableArray(rows, columns, text);
    return getConsoleTable(array);
}

function validateSizes(rows, columns){
    return Number.isInteger(rows) && rows > -1
        && Number.isInteger(columns) && columns > -1;
}

function getHTMLTable(array){
    let result = '<table>';
    if(array.length == 0 || array[0].length == 0){
        result += "</table>";
        return result;
    }
    array.forEach(row => {
        result+= '<tr>';
        row.forEach(column =>{
            result+= '<td>';
            result+= column;
            result+= '</td>';
        });
        result+= '</tr>';
    });
    result+= '</table>';

    return result
}

function getTableArray(rows, columns, text){
    let result = [];
    for (let i = 0; i < rows; i++){
        let row = text.substring(i * columns, (i + 1) * columns).split("");
        if(row.length < columns) {
            " ".repeat(columns - row.length)
               .split('')
               .forEach(item => { 
                   row.push(item); 
                });
        }

        result.push(row);
    }

    return result;
}