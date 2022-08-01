import App from './components/App.js';

let nombreUsuario = document.getElementById('nombreUsuario');
let saludoUsuario = document.getElementById('saludoUsuario');
let primeraPantalla = document.getElementById('primeraPantalla');
let segundaPantalla = document.getElementById('segundaPantalla');
let divBoton = document.getElementById('div-boton')

const saludoUsu = () => {
  nombreUsuario = nombreUsuario.value
  if (nombreUsuario !== '') {
    saludoUsuario.innerHTML = `Hola ${nombreUsuario.toUpperCase()}!`;
    primeraPantalla.style.display = 'none';
    segundaPantalla.style.display = 'block';

  } else {
    alert('No ingresaste tu nombre :D!');
  }
};

//saludo usuario
let botonAJugar = document.getElementById('botonAJugar')
botonAJugar.addEventListener('click', saludoUsu);

// boton Jugar
let botonJugar = document.getElementById('jugar');
botonJugar.addEventListener('click', () => {
  divBoton.style.display = 'none';
  primeraPantalla.style.display = 'none';
  segundaPantalla.style.display = 'block';
})

// Modal de felicitaciones
let botonVolver = document.getElementById('volver');
botonVolver.addEventListener('click', () => {
  let vModal = document.getElementById('vModal')
  vModal.style.display = 'none';
  segundaPantalla.style.display = 'none';
  primeraPantalla.style.display = 'block';
  location.reload()
})

document.getElementById('root').appendChild(App());
