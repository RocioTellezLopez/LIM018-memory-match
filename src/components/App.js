//
// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//
// import pokemon from '../data/pokemon/pokemon.js';

// importo la data de webdev
import webdev from '../data/webdev/webdev.js' 


  //console.log(mostrarData);



//
// O alternativamente podríamos cargar el JSON de forma asíncrona usando
// `fetch` en el momento que consideremos necesario.
//const App = () => {
// fetch('./data/webdev/weddev.json')
//   .then(resp => resp.json())
//   .then(console.log)
//   .catch(console.error);
//}


const App = () => {

//Fiorella
var mostrarData = webdev.items

  //var dobleData = mostrarData.map(function(x){
    //return (x + x);
 //});
 
 //var dobleData = mostrarData.slice();
 //var dobleData = [...mostrarData];
 //var dobleData = Array.from(mostrarData);
 //console.log(dobleData);
//Fiorella-Hasta Aquí

  //const el = document.createElement('div');

  //el.className = 'App';
  //el.textContent = 'Hola mundo!';
  //return el;
  /*const divCartas = document.createElement('div')

  divCartas.className = 'divCartas'
  el.appendChild(divCartas)

  let webdevArray = webdev.items
  let dobleItems = webdevArray.concat(webdevArray)

//console.log(dobleItems)

  dobleItems.forEach(mostrarCartas => {
    let imagenesCartas = mostrarCartas.image
    //console.log(imagenesCartas)
    let divIconos = document.createElement('img')
    divIconos.className = 'estiloCartas'

    divIconos.src = imagenesCartas

    divCartas.appendChild(divIconos)
  //console.log(imagenesCartas)
  
  });

  //---
  //const divCartas = document.createElement('div')

  //divCartas.className = 'divCartas'
  //el.appendChild(divCartas)

  /*let items = webdev.items
  let dobleItems = items.slice()
  //console.log(dobleItems)
  for (let i=0; i<items.length; i++) {
    let imagen = items[i].image
    let dobleImagen = dobleItems[i].image
    //console.log(typeof(imagen))
    let imgCartas = document.createElement('img')
    let imgDoble = document.createElement('img')
    imgCartas.className = 'estiloCartas'
    imgDoble.className = 'estiloCartas'
    
    imgCartas.src = imagen // accedemos a la url de la etiqueta img
    imgDoble.src = dobleImagen

    divCartas.appendChild(imgCartas)
    divCartas.appendChild(imgDoble)
  }*/
  //return el;
}; 

export default App;