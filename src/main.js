import { createCards } from './components/App.js'
import { startCounter } from './components/timer.js'

document.getElementById('table').appendChild(createCards());


//INPUT
const player = document.getElementById("player");
const playerName = document.getElementById("playerName");
const ipName = document.getElementById('ipName');
const error = document.createElement("p");
error.className = "error"
ipName.appendChild(error);

//BOTONES
const go = document.getElementById("button");
const play = document.getElementById("play");
const back = document.getElementById("backB");


//SECCIONES DE PAGINA
const container = document.getElementById("container");
const secondPage = document.getElementById("second");
const game = document.getElementById("game");

go.addEventListener("click", () => {
    if(playerName.value === ''){
        return error.innerText = 'Por favor, ingresa tu nombre';
    }else{
        player.textContent = `Hola ${playerName.value} !`
        container.className = "disabled";
        secondPage.className = "enabled";
    }
});

play.addEventListener("click", () => {
    secondPage.className = "disabled";
    game.className = "enabled";
    startCounter();
})

back.addEventListener("click", () => {
    location.reload();
})


