let velha = [["","",""], ["","",""], ["","",""]];
let main = document.querySelector('main');
let jogador1 = true;
let venceu = false;
let cliques = 0;

function createGame(){
    let cont = 0
    for(let i = 0; i < 3; i++){        
        for(let j = 0; j < 3; j++){
            ++cont
            let button = document.createElement('p');
            button.id = `button-${cont}`;
            button.setAttribute('onclick', 'jogada(this.id);');
            button.setAttribute('class', 'quadrado');                  
            button.value = ""
            velha[i][j] = button.id;
            main.appendChild(button);

        }
    }
}

function jogada(p){
    
    let quadrado = document.querySelector(`#${p}`);
    let texto = quadrado.value;
    if(texto == "" && venceu == false){
        ++cliques;
        if(jogador1){
            quadrado.value = 'X';
            quadrado.textContent = 'X';
            trocarValores('X', p);
            
        }else{
            quadrado.value = 'O';
            quadrado.textContent = 'O';
            trocarValores('O', p);
        }        
        verificarGame();
    }    
    
}

function trocarValores(marcador, p){
    velha.map((item, i)=>{ item.map((item2, j) =>{item2 == p ? velha[i][j] = marcador: item2 = item2;})}) 
}

function verificarGame(){    

     if(velha[0][0] == velha[0][1] && velha[0][1] == velha[0][2]){
        venceu = true;
     }else if(velha[1][0] == velha[1][1] && velha[1][1] == velha[1][2]){
        venceu = true;
     }else if(velha[2][0] == velha[2][1] && velha[2][1] == velha[2][2]){
        venceu = true;
     }else if(velha[0][0] == velha[1][0] && velha[1][0] == velha[2][0]){
        venceu = true;
     }else if(velha[0][1] == velha[1][1] && velha[1][1] == velha[2][1]){
        venceu = true;
     }else if(velha[0][2] == velha[1][1] && velha[1][1] == velha[2][0]){
        venceu = true;
     }else if(velha[0][0] == velha[1][1] && velha[1][1] == velha[2][2]){
        venceu = true;
     }else if(velha[2][2] == velha[1][1] && velha[1][1] == velha[2][0]){
        venceu = true;        
     }
     if(venceu){        
        jogador1 == true ? alert('JOGADOR 1 VENCEU') : alert('JOGADOR 2 VENCEU');
            
    }else if(cliques == 9){
        alert('EMPATE');
    }else{
        jogador1 == true ? jogador1 = false : jogador1 = true;
    }
    console.log(venceu);
    
}


createGame();