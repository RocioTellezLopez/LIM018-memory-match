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
// console.log(dataDoble([1,2,3]))

export const shuffle = (arrayData) => {
  //console.log('entro de shuffle', arrayData)
  let dataCopy = arrayData.slice();
  for(let i = dataCopy.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [dataCopy[i],dataCopy[j]] = [dataCopy[j],dataCopy[i]];
  }
  // console.log('despues de shuffle', arrayData, dataCopy)
  return dataCopy
};

const saludoUsuario = () =>{
  //let botonAJugar = document.getElementById('botonAjugar')
  let nombreUsuario = document.getElementById('nombreUsuario').value;
  let saludoUsuario = document.getElementById('saludoUsuario');
    
  if (nombreUsuario !== '') {
    saludoUsuario.innerHTML = `Hola ${nombreUsuario.toUpperCase()}!`;
    let primeraPantalla = document.getElementById('primeraPantalla');
    let segundaPantalla = document.getElementById('segundaPantalla');
    primeraPantalla.style.display = 'none';
    segundaPantalla.style.display = 'block';

    let botonJugar = document.getElementById('jugar');
    botonJugar.addEventListener('click', () => {
      let divBoton = document.getElementById('div-boton');
      let primeraPantalla = document.getElementById('primeraPantalla');
      let segundaPantalla = document.getElementById('segundaPantalla');
      divBoton.style.display = 'none';
      primeraPantalla.style.display = 'none';
      segundaPantalla.style.display = 'block';
    })
  } else {
    alert('No ingresaste tu nombre :D!');
  }
};

const match= () =>{
  let classMatch = document.getElementsByClassName('flip');
  if(classMatch.length === 20){
    let vModal = document.getElementById('vModal');
    let primeraPantalla = document.getElementById('primeraPantalla');
    let segundaPantalla = document.getElementById('segundaPantalla');
    vModal.style.display = 'block';

    let botonVolver = document.getElementById('volver');
    botonVolver.addEventListener('click',() => {
      vModal.style.display = 'none';
      segundaPantalla.style.display = 'none';
      primeraPantalla.style.display = 'block';
    })
  }
};

const App = () => {
  let clickCartas = [];
  const el = document.createElement('div');
  el.id = 'App';
  //el.textContent = 'Hola mundo!';

  //saludo usuario
  document.getElementById('botonAJugar').addEventListener('click', saludoUsuario);
  //crear tablero 
  let cardBoard = document.createElement('div');
  cardBoard.className = 'cardBoard';
  el.appendChild(cardBoard);

  let webdevArray = webdev.items;
  let dobleItems = dataDoble(webdevArray);
  // console.log(dobleItems)
  // Barajar cartas
  dobleItems = shuffle(dobleItems);
  //dobleItems = dobleItems.sort(()=>{return Math.random()-0.5});
  // console.log(dobleItems);

  // mostrar imagenes en tablero 
  dobleItems.forEach(mostrarCartas => {
    let imagenesCartas = mostrarCartas.image;

    let memoryCard = document.createElement('div');
    memoryCard.className = 'memoryCard';
    // memoryCard.id = mostrarCartas.id
    memoryCard.setAttribute('name', mostrarCartas.id);
    cardBoard.appendChild(memoryCard);
  
    let divIconos = document.createElement('img');
    divIconos.className ='front-face';
    divIconos.style.backgroundColor = mostrarCartas.bgColor;
    divIconos.src = imagenesCartas;
    divIconos.alt = mostrarCartas.id;
    memoryCard.appendChild(divIconos);
    //--- Función Flip Match
    // Agrege addEventListener y defini la funcion flip

    memoryCard.addEventListener('click', flip);

    function flip(e) {
      //memoryCard.classList.add('flip')

      if (clickCartas.length < 2) {
        memoryCard.classList.add('flip');
        clickCartas.push(e.currentTarget);
        //console.log(clickCartas)
        
        if ( clickCartas.length === 2) {
          
          if (clickCartas[0].getAttribute('name') === clickCartas[1].getAttribute('name')){
            console.log('hiciste match');
            setTimeout(match,700);
          
            clickCartas = [];
          } else if (clickCartas[0].getAttribute('name') !== clickCartas[1].getAttribute('name')){
            console.log('no hiciste match')

            setTimeout(() => {
              clickCartas[0].classList.remove('flip')
              clickCartas[1].classList.remove('flip')
              clickCartas = []
            },1000)
          }
        }
      }
    }
  });
  return el;
};

export default App;