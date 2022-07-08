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


const saludoUsuario = () =>{
  //let botonAJugar = document.getElementById('botonAjugar')
    let nombreUsuario = document.getElementById('nombreUsuario').value
    let saludoUsuario = document.getElementById('saludoUsuario')
    
    if (nombreUsuario !== '') {
      saludoUsuario.innerHTML = `Hola ${nombreUsuario.toUpperCase()}!`
    } else {
      alert('No ingresaste tu nombre :D!')
    }
    return
  
}


let clickCartas = []
const App = () => {


  const el = document.createElement('div');
  el.className = 'App';
  //el.textContent = 'Hola mundo!';

  //saludo usuario
  document.getElementById('botonAJugar').addEventListener('click', saludoUsuario)    

  //crear tablero 
  let cardBoard = document.createElement('div');
  cardBoard.className = 'cardBoard'
  el.appendChild(cardBoard)  

  let webdevArray = webdev.items
  let dobleItems = webdevArray.concat(webdevArray)

  // Barajar cartas
  dobleItems = dobleItems.sort(()=>{return Math.random()-0.5});
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

    /*let divIconos2 = document.createElement('img');
    divIconos2.className ='back-face' 
    divIconos2.setAttribute ('src', 'https://static.vecteezy.com/system/resources/previews/002/358/541/non_2x/programming-icon-free-vector.jpg');
    memoryCard.appendChild(divIconos2)*/

    //--- Función Flip Match
    // Agrege addEventListener y defini la funcion flip

    memoryCard.addEventListener('click', flip)

    function flip(e) {
      memoryCard.classList.add('flip')
      
      if (clickCartas.length < 2) {

        clickCartas.push(e.currentTarget)
      }
      if( clickCartas.length === 2) {

        if (clickCartas[0].getAttribute('id') === clickCartas[1].getAttribute('id')){
          console.log('hiciste match')
        
          clickCartas = []
        } else if (clickCartas[0].getAttribute('id') !== clickCartas[1].getAttribute('id')){
          console.log('no hiciste match')
          setTimeout(() => {
            //console.log(clickCartas[0])
            //console.log(clickCartas[1])
            clickCartas[0].classList.remove('flip')
            clickCartas[1].classList.remove('flip')
            clickCartas = []
          },800)
        }
      }

    }

  });
  return el;
};

export default App;