//
// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//
// import pokemon from '../data/pokemon/pokemon.js';
// console.log(pokemon);
// O alternativamente podríamos cargar el JSON de forma asíncrona usando
// `fetch` en el momento que consideremos necesario.
//
// fetch('./data/pokemon/pokemon.json')
//   .then(resp => resp.json())
//   .then(console.log)
//   .catch(console.error);

//-----Inicio de Memory Match
//Prueba de rama compartida para la funcion flip match

import webdev from '../data/webdev/webdev.js';

export const dataDoble = (arrayData) => {
  let dataDoble = arrayData.concat(arrayData);
  return dataDoble
};

export const shuffle = (arrayData) => {
  let dataCopy = arrayData.slice();
  for(let i = dataCopy.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [dataCopy[i],dataCopy[j]] = [dataCopy[j],dataCopy[i]];
  }
  return dataCopy
};

export const createCard = (card) => {
  let cardBoard = document.createElement('div');
  cardBoard.className = 'cardBoard';
  for(let i = 0; i < card.length; i++) {
    let memoryCard = document.createElement('div');
    let cardId = card[i].id;
    memoryCard.className = 'memoryCard'
    memoryCard.setAttribute('name',cardId);

    let cardImg = document.createElement('img')
    let cardUrl = card[i].image
    cardImg.src = cardUrl
    cardImg.className ='front-face';
    cardImg.style.backgroundColor = card[i].bgColor;
    cardImg.alt = card[i].id;

    memoryCard.appendChild(cardImg)
    cardBoard.appendChild(memoryCard)
  }
  return cardBoard
};

export const matchModal = (classFlip) =>{
  if(classFlip.length === 4){
    return true
  } else {
    return false
  }
};

export const matchCard = (cardA, cardB) => {
  let firstCard = cardA.getAttribute('name')
  let secondCard = cardB.getAttribute('name')
  if (firstCard === secondCard) {
    // console.log('Hiciste match')
    setTimeout(() => {
      let classFlip = document.getElementsByClassName('flip')
      if (matchModal(classFlip)) {
        let vModal = document.getElementById('vModal');
        vModal.style.display = 'block';
      }
    }, 800)

  } else if (firstCard !== secondCard) {
    // console.log('No hiciste match')
    setTimeout(() => {
      cardA.classList.remove('flip');
      cardB.classList.remove('flip');
    }, 800)
  }
  return [cardA, cardB]
};

const App = () => {
  let clickCartas = [];
  const el = document.createElement('div');
  el.id = 'App';
  //el.textContent = 'Hola mundo!';

  // Data webdev.items
  let webdevArray = webdev.items;

  // Duplicado de data
  let dobleItems = dataDoble(webdevArray)

  // Data random - Fisher Yates
  let dataRandom = shuffle(dobleItems)

  // Div para almacenar las imagenes
  let cardBoard = createCard(dataRandom)
  el.appendChild(cardBoard)

  cardBoard.addEventListener('click', (e) => {
    // console.log(e.target.className)
    if (e.target.className == 'memoryCard') {
      if (clickCartas.length < 2) {
        cardBoard = e.target
        clickCartas.push(cardBoard)
        cardBoard.classList.add('flip')
        if (clickCartas.length === 2) {
          let cardA = clickCartas[0]
          let cardB = clickCartas[1]
          matchCard(cardA, cardB)
          clickCartas = []
        }
      }
    }
  })
  
  return el;
};

export default App;