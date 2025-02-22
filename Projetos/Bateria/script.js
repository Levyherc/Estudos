// Primeira etapa é reconhecer quando se aperta uma tecla
// Iremos usar body - todo o site 
// Usaremos o document para capturar o elemento
// Esaremos EventListener que possui dois parâmetros - Evento e ação
document.body.addEventListener('keyup', (event) => {
    playSound(event.code.toLocaleLowerCase () );
})

// criando a função responsável por disparar a composição
document.querySelector('.composer button').addEventListener('click', () => {
    let song = document.querySelector('#input').value;
    
    
    // verifica se foi digitado algo
    if(song !== '') {
        let songArray = song.split('');
        playComposition(songArray);
    }

})



// criando a função responsável por fazer com que a bateria funcione
function playSound(sound) {
    // para que fique dinâmico a identificação da tecla usamos o template
    let audioElement = document.querySelector(`#s_${sound}`);

    // verificando a letra
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);

    // criamos a condição para que se toque ao encontrar a letra
    if(audioElement) {
        audioElement.currentTime = 0;
        audioElement.play();
    };

    if(keyElement) {
        // aplicar a estilização css ao selecionar uma tecla
        keyElement.classList.add('active');

        // função com dois parâmetros 
        // 1ª o que vai executar 
        // 2ª tempo de duração
        setTimeout(() => {
            keyElement.classList.remove('active')
        }, 300);
    }

};

function playComposition(songArray) {
    let wait = 0;


    for(let songItem of songArray) {
        setTimeout(() => {
            playSound(`key${songItem}`); 
        }, wait);

        wait += 250;
        
    }
}