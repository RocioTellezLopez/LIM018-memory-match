import './App.js'

let segundos = 120 ;
let intervaloTiempo = 0;

const timer = document.getElementById("timer")
const mensaje = document.getElementById("mensaje")
const modalContainer = document.getElementById("modalContainer")

const createTimer = () => {
    if (segundos === 0){
        stopCounter();
        setTimeout(function(){
            modalContainer.style.opacity = "1";
            modalContainer.style.visibility ="visible";
            const perdiste = document.createElement ("div");
            perdiste.className = "perdedor";
            perdiste.textContent = "INTENTALO OTRA VEZ"
            mensaje.appendChild(perdiste);
        }
        ,1000);
    }
    let minutes= Math.floor(segundos/60);
    let secons =segundos - (minutes*60);
    /*Si los segundos son menores a 10
    nos aseguramos que quede en formato 0:00*/
    if (secons < 10){
        secons = '0'+secons;
    }
    const textTimer= minutes + ':' + secons;
    timer.innerText = textTimer;
    segundos --;
    return timer
}

const startCounter =() =>{
    intervaloTiempo = setInterval(createTimer,600);

}

const stopCounter =() =>{
    clearInterval(intervaloTiempo);
}

export default startCounter


