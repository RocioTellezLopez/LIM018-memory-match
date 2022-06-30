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


/*let array2 = array1.forEach(
  alert("Hola")
);*/
//console.log(array2)




//let mostrarData = document.getElementById('root')
//mostrarData.innerHTML = webdev.items
//console.log(webdev.items[0].image)

//document.getElementById("image").src = webdev.items[0].image

const App = () => {


  let crearEtiquetaImg = document.createElement("img")
  document.getElementById('root').appendChild(crearEtiquetaImg)
  //crearEtiquetaImg.src = webdev.items[0].image
  let array1 = webdev.items
  let dobleArray= array1.concat(array1)

  console.log(dobleArray)
  
  for(let i=0; i<dobleArray.length; i++){
    let mostrarImagenes = document.createElement("img")
    mostrarImagenes.src = dobleArray[i].image
    //console.log(array1[i].image)
    document.getElementById('root').appendChild(mostrarImagenes)
    //console.log(mostrarImagenes)

    //crear etiquetas para duplicar las cartas
    /*let dobleImagenes = document.createElement("img")
    document.getElementById('root').appendChild(dobleImagenes)
    
    dobleImagenes.src = mostrarImagenes.src.slice()
    console.log(dobleImagenes)*/
  }


  /*dobleImagenes.src = mostrarImagenes.map(function(x){
    return (x + x);
 });*/
 
  //var dobleImagenes = mostrarImagenes.slice();

 //var dobleData = [...mostrarData];
 //var dobleData = Array.from(mostrarData);
 //console.log(dobleData);
//Fiorella-Hasta Aquí

  const el = document.createElement('div');
  el.className = 'App';
  el.textContent = 'Hola mundo!';

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
  return el;
}; 

export default App;