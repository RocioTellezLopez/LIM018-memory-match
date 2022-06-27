import App from './components/App.js';
import webdev from './data/webdev/webdev.js';


let mostrarData = document.getElementById('root')
mostrarData.innerHTML = webdev.items
console.log(webdev.items[0].image)
   
document.getElementById("image").src = webdev.items[0].image


//document.getElementById('root').appendChild(App());

//-------