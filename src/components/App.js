//
// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//
//
// O alternativamente podríamos cargar el JSON de forma asíncrona usando
// `fetch` en el momento que consideremos necesario.
//
// fetch('./data/pokemon/pokemon.json')
//   .then(resp => resp.json())
//   .then(console.log)
//   .catch(console.error);
//

import data from '../data/pokemon/pokemon.js';
import {stopCounter} from './timer.js';
import  createMedals from './medallas.js'


let score = 0;
let countTurn = 0;
const puntaje = document.getElementById("puntos");
const mensaje = document.getElementById("mensaje");
const turn = document.getElementById("turnos");
const modalContainer = document.getElementById("modalContainer");
const resultado = document.getElementById("resultado");


const itemsPokemon = [...data.items, ...data.items];
//console.log(itemsPokemon)

//const dobleitems = [...itemsPokemon, ...itemsPokemon];
//console.log(dobleitems)
 
function shuffle (array){    // Función para barajar cartas y desordenarlas
  return array.sort(()=>{return Math.random()-0.5});//utilizamos sort para desordenar los 18 items mediante el método math.random
}

const sortedPokemon = shuffle(itemsPokemon);
//console.log(sortedPokemon)


const createCards = () => {
  const areaCarta = document.createElement('div');
  areaCarta.className = "areaCarta";

  sortedPokemon.forEach(item => {
    //Creando div "tarjeta"
    const tarjeta = document.createElement("div");
    tarjeta.className = "tarjeta";
    tarjeta.setAttribute("data-pokemonid",`${item.id}`);
  
    //Creando div "cara posterior"
    const caraPosterior = document.createElement("div");
    caraPosterior.className = "cara posterior";
    caraPosterior.setAttribute("id", "posterior");
    //Creando variable para presentar imagen de pokemon
    const imagePokemon = document.createElement("img");
    imagePokemon.src = `${item.image}`;
    caraPosterior.appendChild(imagePokemon);

    //Creando div "cara superior"  
    const caraSuperior = document.createElement("div");
    caraSuperior.className = "cara superior";
    //Creando variable para presentar imagen de signo de interrogación
    const imagePregunta = document.createElement("img");
    imagePregunta.src = "./img/signo-de-interrogacion.png";
    caraSuperior.appendChild(imagePregunta);

    tarjeta.appendChild(caraPosterior);
    tarjeta.appendChild(caraSuperior);
    areaCarta.appendChild(tarjeta);

    tarjeta.addEventListener("click",  flipCards);
  });
  
  return areaCarta

}


let selection =[];
function flipCards (e) {
  e.currentTarget.style.transform = "rotateY(180deg)";
  selection.push(e.currentTarget);
  const selectLength = selection.length
  
  if (selectLength == 2){
    winner(selection);
    deseleccionar(selection);
    counterTurns(selection);
  }
  if(selection.length ==  2 ) {
    selection = []
  }
}

function deseleccionar(selection) {
  console.log(selection)
    setTimeout(()=> {
        if (selection[0].dataset.pokemonid != selection[1].dataset.pokemonid){
          selection[0].style.transform = "rotateY(0deg)";
          selection[1].style.transform = "rotateY(0deg)";
        }
      },1100);
}
  
function winner(selection){
  if (selection[0].dataset.pokemonid == selection[1].dataset.pokemonid){
    score +=100
    puntaje.innerHTML = `${score}`
    if(score == 900) {
      modalContainer.style.opacity = "1";
      modalContainer.style.visibility ="visible";
      const win = document.createElement ("div");
      win.className = "ganador"
      win.textContent = "Ganaste"
      mensaje.appendChild(win);
      resultado.appendChild(createMedals(countTurn));
      stopCounter()
    }

  }
}
  
function counterTurns(selection){
  if (selection.length == 2){
    countTurn++
    turn.innerHTML = `${countTurn}`
  }
return countTurn
}

function createLoser () {
  modalContainer.style.opacity = "1";
  modalContainer.style.visibility ="visible";
  const perdiste = document.createElement ("div");
  perdiste.className = "perdedor"
  perdiste.textContent = " INTÉNTALO OTRA VEZ";
  mensaje.appendChild(perdiste);
  const imagenLoser = document.createElement ("img")
  imagenLoser.src= "./img/llorar.png"
  resultado.appendChild(imagenLoser)
}
//console.log(e.currentTarget.dataset.pokemonid)

export {createCards, shuffle,winner, flipCards, createLoser};


