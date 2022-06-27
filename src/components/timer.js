import  {createLoser} from './App.js'

let segundos = 250 ;
let intervaloTiempo = 0;

const timer = document.getElementById("timer")
const createTimer = () => {
    if (segundos === 0){
        stopCounter();
        setTimeout(createLoser,1000)
        }
    let minutes= Math.floor(segundos/60);
    let secons =segundos - (minutes*60);
    /*Si los segundos son menores a 10
    nos aseguramos que quede en formato 0:00*/
    if (secons < 10){
        secons = '0'+secons;
    }
    const textTimer= minutes + ':' + secons;
    timer.innerHTML = textTimer;
    segundos --;
    return timer
}

const startCounter =() =>{
    intervaloTiempo = setInterval(createTimer,600);

}

const stopCounter =() =>{
    clearInterval(intervaloTiempo);
}



export {createTimer,startCounter,stopCounter};


