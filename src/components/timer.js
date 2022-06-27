import { createLoser } from './App.js'


let theTime = 180;
let intervaloTiempo = 0;

const timer = document.getElementById("timer")


const createTimer = () => {
    if (theTime === 0) {
        stopCounter();
        setTimeout(createLoser, 1000)
    }

    let minutes = Math.floor(theTime / 60);
    let seconds = theTime - (minutes * 60);
    /*Si los segundos son menores a 10
    nos aseguramos que quede en formato 0:00*/
    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    const textTimer = minutes + ':' + seconds;
    timer.innerHTML = textTimer;
    theTime--;

    return timer
}

const startCounter = () => {
    intervaloTiempo = setInterval(() => {
        createTimer(timer)
    }, 600);

}

const stopCounter = () => {
    clearInterval(intervaloTiempo);
}

export { createTimer, stopCounter, startCounter };


