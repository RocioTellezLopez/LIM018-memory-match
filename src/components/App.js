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

//Craer imagen de primera pantalla

//let imgPrincipal = document.createElement('img')
//imgPrincipal.setAttribute('src', '../data/mm.jpg')
//primeraPantalla.appendChild(imgPrincipal)


//let mostrarData = document.getElementById('root')
//mostrarData.innerHTML = webdev.items
//console.log(webdev.items[0].image)

//document.getElementById("image").src = webdev.items[0].image
let clickImg=[]

export function shuffle(num){
  for(let i = num.length-1; i>0; i--){
    let a = Math.floor(Math.random() * (i + 1));
    [num[i],num[a]] = [num[a],num[i]];
  }
  return num;
}


/*function modalGanaste(){
  let totalMatch = document.getElementsByClassName('flip');
  if(totalMatch.length == 2){
    document.getElementById('containerModalFinal').style.display = 'block';
  }
}*/


const App = () => {
  //let crearEtiquetaImg = document.createElement("img")
  //document.getElementById('root').appendChild(crearEtiquetaImg)
  //crearEtiquetaImg.src = webdev.items[0].image
  
  let array1 = webdev.items
  let dobleArray= array1.concat(array1)
  let distribuirCartas = shuffle(dobleArray)

  //console.log(distribuirCartas)

  for(let i=0; i<distribuirCartas.length; i++){

    //Crear un contenedor de imágenes
    let contenedorImagenes=document.createElement("div")
    contenedorImagenes.className="contenedorImagenes"
    contenedorImagenes.id = distribuirCartas[i].id
    const root= document.getElementById('root')
    root.appendChild(contenedorImagenes)

    //Crear un FrontFace
    let frontFace = document.createElement('div')
    frontFace.className='frontFace'
    contenedorImagenes.appendChild(frontFace)

    //Crear imágenes
    let mostrarImagenes = document.createElement("img")
    mostrarImagenes.src = distribuirCartas[i].image
    mostrarImagenes.alt = distribuirCartas[i].id
    mostrarImagenes.style.backgroundColor= distribuirCartas[i].bgColor
    //contenedorImagenes.appendChild(estiloImagenes)
    frontFace.appendChild(mostrarImagenes)

    //Crear un backFace
    let backFace = document.createElement('div')
    backFace.className='backFace'
    contenedorImagenes.appendChild(backFace)
    //console.log(array1[i].image)
   
    //console.log(mostrarImagenes)

    //Crear imágenes del backFace
    let imgBackFace = document.createElement('img')
    //imgBackFace.style.backgroundImage = url()
    imgBackFace.setAttribute('src', '../data/images.png')
    backFace.appendChild(imgBackFace)

   
    const flip = function(e){
   
      if(clickImg.length < 2){
        contenedorImagenes.classList.add('flip')
        clickImg.push(e.currentTarget)
        //console.log(clickImg)
       
      }
        if(clickImg.length === 2){
          if(clickImg[0].getAttribute('id') === clickImg[1].getAttribute('id')){
            //console.log('Hiciste Match')

            clickImg = []
          }
          else if(clickImg[0].getAttribute('id') !== clickImg[1].getAttribute('id')){
            //console.log('No hiciste Match')

            setTimeout( ()=>{
              clickImg[0].classList.remove('flip')
              clickImg[1].classList.remove('flip')
              clickImg = []
              },
            500);
          }  
      }
    }
    
    contenedorImagenes.addEventListener('click', flip)
    //window.addEventListener('hashchange', () => console.log(window.location.hash))
  }

  let btnInicio = document.getElementById('btnInicio');
  let primeraPantalla = document.getElementById('primeraPantalla');
  let segundaPantalla = document.getElementById('segundaPantalla');

  btnInicio.addEventListener('click', () =>{
    let ingresarNombre = document.getElementById('ingresarNombre').value;
    let mostrarNombre = document.getElementById('mostrarNombre');
   
      if(ingresarNombre !== ''){
        mostrarNombre.innerHTML = ` Hola ${ingresarNombre[0].toUpperCase()}${ingresarNombre.substring(1)}!`
        primeraPantalla.style.display = 'none';
        segundaPantalla.style.display = 'block';
      }else{
        alert('Ingresa tu nombre');
      }
  });

  let modalBtnPlay = document.getElementById('modalBtnPlay');
  let btnPlay = document.getElementById('btnPlay');
  
  btnPlay.addEventListener('click', () =>{
    modalBtnPlay.style.display = 'none';
    segundaPantalla.style.display = 'block';
    //modalBtnPlay.classList.remove('show');
  });
  
  //let containerModalFinal = document.getElementById('containerModalFinal');

  let btnModalFinal = document.getElementById('btnModalFinal');
  
    btnModalFinal.addEventListener('click', () =>{  
      document.getElementById('containerModalFinal').style.display = 'none';
      segundaPantalla.style.display = 'none';
      primeraPantalla.style.display = 'block';
  });

  //et num1 = ["a","b","c"]
  //let num = [1,2,3,4,5]
 
      //console.log(shuffle(dobleArray))
    //console.log(shuffle(num1))

  const el = document.createElement('div');
  el.className = 'App';
  //el.textContent = 'Hola mundo!';

  return el;
};

export default App;