import { createCards } from './components/App.js';
import { startCounter } from './components/timer.js'

document.getElementById('table').appendChild(createCards());


//INPUT
const player = document.getElementById("player")
const playerName = document.getElementById("playerName")

//BOTONES
const go = document.getElementById("button")
const play = document.getElementById("play")
const back = document.getElementById("backB")


//SECCIONES DE PAGINA
const container = document.getElementById("container")
const secondPage = document.getElementById("second")
const game = document.getElementById("game")

go.addEventListener("click", () => {
    player.textContent = `Hola ${playerName.value} !`
    container.className = "disabled";
    secondPage.className = "enabled";

});

play.addEventListener("click", () => {
    secondPage.className = "disabled";
    game.className = "enabled";
    startCounter();
})

back.addEventListener("click", () => {
    location.reload();
})


