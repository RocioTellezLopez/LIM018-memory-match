import App from './components/App.js';

//saludo usuario
let botonAJugar = document.getElementById('botonAJugar')
let primeraPantalla = document.getElementById('primeraPantalla')
let segundaPantalla = document.getElementById('segundaPantalla')
botonAJugar.addEventListener('click', () => {
    let nombreUsuario = document.getElementById('nombreUsuario').value
    let saludoUsuario = document.getElementById('saludoUsuario')

    if (nombreUsuario !== '') {
        saludoUsuario.innerHTML = `Hola ${nombreUsuario.toUpperCase()}!`
        primeraPantalla.style.display = 'none'
        segundaPantalla.style.display = 'block'
    } else {
        alert('No ingresaste tu nombre :D!')
    }
})   

let jugar = document.getElementById('jugar')
jugar.addEventListener("click", ()=>{   
    document.getElementById("div-boton").style.display = 'none';
    primeraPantalla.style.display = 'none';
    segundaPantalla.style.display = 'block';
  })

let botonVolver = document.getElementById('volver')
botonVolver.addEventListener('click', ()=>{
    document.getElementById('vModal').style.display = 'none';
    segundaPantalla.style.display = 'none';
    primeraPantalla.style.display = 'block';
})

document.getElementById('root').appendChild(App());
