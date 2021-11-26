function reset(){
    for (var i = 0; i < arguments.length; i++) {
        document.getElementById(arguments[i]).value = '';
        document.getElementById(arguments[i]).innerHTML = '';
    }
}