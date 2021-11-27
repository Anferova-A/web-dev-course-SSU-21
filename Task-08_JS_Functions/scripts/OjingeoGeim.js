function game(playersCount, step){
    let players = [];
    for(let i = 1; i <= playersCount; i++){
        players.push(i);
    }

    
    for(let k = (step - 1) % players.length; players.length > 1; k = (k - 1 + step) % players.length){
        players.splice(k, 1);
    }

    return players[0];
}

console.log('Task 8.2');
console.log(game(7, 3));
console.log(game(11, 19));
console.log(game(1, 300));
console.log(game(14, 2));
console.log(game(100, 1));