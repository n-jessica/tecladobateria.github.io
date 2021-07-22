document.body.addEventListener('keyup', (event) => {
    playSound(event.code.toLowerCase()); //Toca a função playsound
});

//Evento do botão tocar
document.querySelector('.composer button').addEventListener('click', () => {
    let song = document.querySelector('#input').value;

    if (song !== '') {
        let songArray = song.split('');
        playComposition(songArray);
    }
});

function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`); //Seleciona o arquivo de audio baseado na tecla digitada
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);//Elemento da tecla


    if (audioElement) {//Verifica se o audio existe p a tecla selecionada
        audioElement.currentTime = 0;
        audioElement.play();
    }

    if (keyElement) {//destaca o elemento selecionado
        keyElement.classList.add('active');

        setTimeout(() => {
            keyElement.classList.remove('active');
        }, 300);
    }
}

//Essa função agrupa as notas - algo assim. Faz um loop
function playComposition(songArray) {
    let wait = 0;

    for (let songItem of songArray) {
        setTimeout(() => {
            playSound(`key${songItem}`);
        }, wait);

    wait += 250;
    }
}