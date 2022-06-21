
let segundos = 250 ;
let intervaloTiempo = 0;

const timer = document.getElementById("timer")
const modalContainer = document.getElementById("modalContainer")
const mensaje = document.getElementById("mensaje")
const resultado = document.getElementById("resultado")

const createTimer = () => {
        if (segundos === 0){
            stopCounter();
            setTimeout(() =>{
                  modalContainer.style.opacity = "1";
                  modalContainer.style.visibility ="visible";
                  const perdiste = document.createElement ("div");
                  perdiste.className = "perdedor"
                  perdiste.textContent = " INTÉNTALO OTRA VEZ";
                  mensaje.appendChild(perdiste);
                  const imagenLoser = document.createElement ("img")
                  imagenLoser.src= "./img/llorar.png"
                  resultado.appendChild(imagenLoser)

            },1000)
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

export {startCounter,stopCounter};


