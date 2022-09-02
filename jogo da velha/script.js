let velha = [["","",""], ["","",""], ["","",""]];
let main = document.querySelector('main');

function createGame(){
    let cont = 0
    for(let i = 0; i < 3; i++){        
        for(let j = 0; j < 3; j++){
            ++cont
            let button = document.createElement('div');
            button.id = `button-${cont}`;
            button.setAttribute('onclick', 'jogada();');
            button.setAttribute('class', 'quadrado');          
            velha[i][j] = button.id;
            main.appendChild(button);

        }
    }
}

createGame();

console.log(velha);