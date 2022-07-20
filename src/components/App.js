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

export const dataDoble = (data) => {
  let dataDoble = data.concat(data)
  return dataDoble
};

const shuffle = (data) => {
  let copyData = data.slice()
  for(let i = copyData.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random()*(i + 1));
    [copyData[i], copyData[j]] = [copyData[j], copyData[i]]
  }
  return copyData
};


const match= () =>{
  let classMatch = document.getElementsByClassName('flip')
  if(classMatch.length === 4){
    document.getElementById('vModal').style.display = 'block';
  }
}

const App = () => {
  let clickCartas = []

  const el = document.createElement('div');
  el.id = 'App';
  //el.textContent = 'Hola mundo!';

  //crear tablero 
  let cardBoard = document.createElement('div');
  cardBoard.className = 'cardBoard'
  el.appendChild(cardBoard)  

  let webdevArray = webdev.items
  let dobleItems = dataDoble(webdevArray)
  // console.log(dobleItems)

  // Barajar cartas
  dobleItems = shuffle(dobleItems)

  // dobleItems = dobleItems.sort(()=>{return Math.random()-0.5});
  //console.log(dobleItems);

  // mostrar imagenes en tablero 
  dobleItems.forEach(mostrarCartas => {
    let imagenesCartas = mostrarCartas.image

    let memoryCard = document.createElement('div');
    memoryCard.className = 'memoryCard'
    memoryCard.id = mostrarCartas.id
    cardBoard.appendChild(memoryCard)
  
    let divIconos = document.createElement('img');
    divIconos.className ='front-face'
    divIconos.style.backgroundColor = mostrarCartas.bgColor
    divIconos.src = imagenesCartas
    divIconos.alt = mostrarCartas.id
    memoryCard.appendChild(divIconos)

    //--- Función Flip Match
    // Agrege addEventListener y defini la funcion flip

    memoryCard.addEventListener('click', flip)

    function flip(e) {
      //memoryCard.classList.add('flip')

      if (clickCartas.length < 2) {
        memoryCard.classList.add('flip')
        clickCartas.push(e.currentTarget)
        console.log(clickCartas)
      }
      if( clickCartas.length === 2) {

        if (clickCartas[0].getAttribute('id') === clickCartas[1].getAttribute('id')){
          console.log('hiciste match')
          setTimeout(match,700)
        
          clickCartas = []
        } else if (clickCartas[0].getAttribute('id') !== clickCartas[1].getAttribute('id')){
          console.log('no hiciste match')
          setTimeout(() => {
            //console.log(clickCartas[0])
            //console.log(clickCartas[1])
            try {
              clickCartas[0].classList.remove('flip')
              clickCartas[1].classList.remove('flip')
            }
            catch (error){
              console.log('error de click', error)
            }
            clickCartas = []
          },1000)
        }
      }

    }
    

  });
  return el;
};

export default App;
