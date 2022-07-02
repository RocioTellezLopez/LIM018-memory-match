
// O alternativamente podríamos cargar el JSON de forma asíncrona usando
// `fetch` en el momento que consideremos necesario.
//
// fetch('./data/pokemon/pokemon.json')
//   .then(resp => resp.json())
//   .then(console.log)
//   .catch(console.error);
//

import data from '../data/pokemon/pokemon.js';
import { stopCounter } from './timer.js';
import createMedals from './medals.js'


let score = 0;
let countTurn = 0;
const getPoints = () => document.getElementById("points");
const getMessage = () => document.getElementById("message");
const getTurns = () => document.getElementById("turns");
const getModalContainer = () => document.getElementById("modalContainer");
const getResult = () => document.getElementById("result");

const itemsPokemon = [...data.items, ...data.items];


function shuffle(array) {    // Función para barajar cartas y desordenarlas
  return array.sort(() => { return Math.random() - 0.5 });//utilizamos sort para desordenar los 18 items mediante el método math.random
}

const sortedPokemon = shuffle(itemsPokemon);
//console.log(sortedPokemon)


const createCards = (pokemons = sortedPokemon) => {  
  const cardArea = document.createElement('div');
  cardArea.className = "cardArea";

  pokemons.forEach(item => {
    //Creando div "tarjeta(card)"
    const card = document.createElement("div");
    card.className = "card";
    card.setAttribute("data-pokemonid", `${item.id}`);

    //Creando div "cara posterior(back face)"
    const backFace = document.createElement("div");
    backFace.className = "face back";
    backFace.setAttribute("id", "back");
    //Creando variable para presentar imagen de pokemon
    const imagePokemon = document.createElement("img");
    imagePokemon.src = `${item.image}`;
    backFace.appendChild(imagePokemon);

    //Creando div "cara superior(front face)"  
    const frontFace = document.createElement("div");
    frontFace.className = "face front";
    //Creando variable para presentar imagen de signo de interrogación
    const imageQuestion = document.createElement("img");
    imageQuestion.src = "./img/signo-de-interrogacion.png";
    frontFace.appendChild(imageQuestion);

    card.appendChild(backFace);
    card.appendChild(frontFace);
    cardArea.appendChild(card);

    card.addEventListener("click", flipCards);
  });

  return cardArea

}


function flipCards(e) {
  e.currentTarget.style.transform = "rotateY(180deg)";
  e.currentTarget.classList.add('rotated');
  //selection.push(e.currentTarget);
  let selection = [...document.getElementsByClassName('rotated')];
  const selectLength = selection.length
  
  if (selectLength == 2) {
    winner(selection);
    deselect(selection);
    counterTurns(selection);
    selection.forEach((item) => item.classList.remove('rotated'));
  }
}


function deselect(selection) {
  setTimeout(() => {
    if (selection[0].dataset.pokemonid != selection[1].dataset.pokemonid) {
      selection[0].style.transform = "rotateY(0deg)";
      selection[1].style.transform = "rotateY(0deg)";
      
    }
  }, 1100);
}

function winner(selection) {
  const pt = getPoints();
  const message = getMessage();
  const result = getResult();
  if (selection[0].dataset.pokemonid == selection[1].dataset.pokemonid) {
    score += 100
    pt.innerHTML = `${score}`
  
    if (score === 900) {
      const modalContainer = getModalContainer()
      modalContainer.style.opacity = "1";
      modalContainer.style.visibility = "visible";

      const win = document.createElement("div");
      win.className = "winner";
      win.textContent = "Ganaste";

      message.appendChild(win);
      result.appendChild(createMedals(countTurn));
      stopCounter()
    }

  }
}

function counterTurns(selection) {
  const trn = getTurns();
  if (selection.length == 2) {
    countTurn++
    trn.innerHTML = `${countTurn}`
  }
  return trn
}

function createLoser() {
  const modalContainer = getModalContainer()
  modalContainer.style.opacity = "1";
  modalContainer.style.visibility = "visible";
  const message = getMessage();
  const result = getResult();

  const loser = document.createElement("div");
  loser.className = "loser";
  loser.textContent = " INTÉNTALO OTRA VEZ";
  message.appendChild(loser);

  const imageLoser = document.createElement("img");
  imageLoser.src = "./img/llorar.png";
  result.appendChild(imageLoser);

}


//console.log(e.currentTarget.dataset.pokemonid)

export { createCards, shuffle, winner, createLoser,deselect,counterTurns };


