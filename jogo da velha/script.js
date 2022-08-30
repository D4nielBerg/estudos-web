let velha = [["","",""], ["","",""], ["","",""]];

//console.log(velha);
//velha.push('X');
//console.log(velha);

function createGame(){
    let cont = 0
    for(let i = 0; i < 3; i++){        
        for(let j = 0; j < 3; j++){
            ++cont
            let button = document.createElement('button');
            button.id = `button-${cont}`;
            velha[i][j] = button.id;

        }
    }
}

createGame();

console.log(velha);