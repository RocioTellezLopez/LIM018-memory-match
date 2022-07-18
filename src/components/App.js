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

export const dataDoble = (array) => {
  let dataDoble = array.concat(array);
  return dataDoble
}
// console.log(dataDoble([1,2,3]))

export const shuffle = (array) => {
  for(let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i],array[j]] = [array[j],array[i]];
  }
  return array
}
// console.log(shuffle([1,2,3,4,5,6]))

// const matchCard = (card1, card2) => {
//   if (card1 === card2) {

//   }
  
// }

const saludoUsuario = () =>{
  //let botonAJugar = document.getElementById('botonAjugar')
    let nombreUsuario = document.getElementById('nombreUsuario').value
    let saludoUsuario = document.getElementById('saludoUsuario')
    
    if (nombreUsuario !== '') {
      saludoUsuario.innerHTML = `Hola ${nombreUsuario.toUpperCase()}!`
      primeraPantalla.style.display = 'none'
      segundaPantalla.style.display = 'block'
    } else {
      alert('No ingresaste tu nombre :D!')
    }
   return
  
}

document.getElementById('jugar').addEventListener("click", ()=>{   
document.getElementById("div-boton").style.display = 'none';
document.getElementById('primeraPantalla').style.display = 'none';
document.getElementById('segundaPantalla').style.display = 'block';
})



const match= () =>{
  let classMatch = document.getElementsByClassName('flip')
  if(classMatch.length === 20){
    document.getElementById('vModal').style.display = 'block';
  }
}

// document.getElementById('volver').addEventListener('click', ()=>{
// document.getElementById('vModal').style.display = 'none';
// document.getElementById('segundaPantalla').style.display = 'none';
// document.getElementById('primeraPantalla').style.display = 'block';
// })


     
      


const App = () => {
  let clickCartas = []

  const el = document.createElement('div');
  el.id = 'App';
  //el.textContent = 'Hola mundo!';

  //saludo usuario
  document.getElementById('botonAJugar').addEventListener('click', saludoUsuario)    

  //crear tablero 
  let cardBoard = document.createElement('div');
  cardBoard.className = 'cardBoard'
  el.appendChild(cardBoard)  

  let webdevArray = webdev.items
  let dobleItems = dataDoble(webdevArray)
  // console.log(dobleItems)
  // Barajar cartas
  dobleItems = shuffle(dobleItems)
  //dobleItems = dobleItems.sort(()=>{return Math.random()-0.5});
  // console.log(dobleItems);

  // mostrar imagenes en tablero 
  dobleItems.forEach(mostrarCartas => {
    let imagenesCartas = mostrarCartas.image

    let memoryCard = document.createElement('div');
    memoryCard.className = 'memoryCard'
    // memoryCard.id = mostrarCartas.id
    memoryCard.setAttribute('name', mostrarCartas.id)
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
      //memoryCard.classList.add('flip')

      if (clickCartas.length < 2) {
        memoryCard.classList.add('flip')
        clickCartas.push(e.currentTarget)
        // console.log(clickCartas)
        
        if ( clickCartas.length === 2) {

          if (clickCartas[0].getAttribute('name') === clickCartas[1].getAttribute('name')){
            console.log('hiciste match')
            setTimeout(match,700)
          
            clickCartas = []
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