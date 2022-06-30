import { createLoser } from './App.js'

let timeInterval = 0;
let theTime = 180;
const getTimer = () => document.getElementById("timer")


const createTimer = () => {
    const t = getTimer();
    
    if (theTime === 0) {
        stopCounter();
        createLoser();
    }

    let minutes = Math.floor(theTime / 60);
    let seconds = theTime - (minutes * 60);
    /*Si los segundos son menores a 10
    nos aseguramos que quede en formato 0:00*/
    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    const textTimer = minutes + ':' + seconds;
    t.innerHTML = textTimer;
    theTime--;

    return t
}

const startCounter = () => {
    timeInterval = setInterval(() => {
        createTimer()
    }, 600);

}

const stopCounter = () => {
    clearInterval(timeInterval);
}

export { createTimer, stopCounter, startCounter };


