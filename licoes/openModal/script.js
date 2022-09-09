let botao = document.body.querySelector('button');
let modalWrapper = document.querySelector('.modal-wrapper');




botao.addEventListener('click', () =>{
    modalWrapper.classList.remove('invisible');
});

document.addEventListener('keydown', (event) =>{
    if(event.key == 'Escape'){
        
        let exist = false;
        
        classModal = modalWrapper.classList;
        classModal.forEach(element => {
            if(element == 'invisible'){
                exist = true;        
            }
        });

        if(exist == false){
            modalWrapper.classList.add('invisible');            
        }
    }
})



