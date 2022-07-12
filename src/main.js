import App from './components/App.js';


document.getElementById('root').appendChild(App());
<<<<<<< HEAD
=======

let movimientos = 0;
let aciertos = 0;
let temporizador = false;
let timer = 60;
let timerInicial = 60;
let tiempoRegresivoId = null;


let mostrarMovimientos = document.getElementById('moves');
let mostrarAciertos = document.getElementById('score');
let mostrarTiempo = document.getElementById('timer')


const cards = document.querySelectorAll('.memoryCard');   
let firstCard,secondCard; 
let lockCard = false;

function contarTiempo(){
  tiempoRegresivoId = setInterval(()=>{
    timer--;
    mostrarTiempo.innerHTML = `Tiempo:${timer} segundos`;
    if(timer==0){
      clearInterval(tiempoRegresivoId); 
      bloquearTarjetas();
    }
  },1000);
}

function bloquearTarjetas(){
  for (let i = 0; i<=19; i++){
    let tarjetaBloqueada = document.getElementById(i);
    tarjetaBloqueada.innerHTML = cards[i];
    tarjetaBloqueada.disabled = true;
  }
}

(function shuffle(){
  cards.forEach(card => {
    let rand = Math.floor(Math.random()*12);
    card.style.order = rand;
    console.log(rand)
  });
})();

// función voltear cartas
function flipCard() {
 
  if(temporizador == false){//
    contarTiempo();
    temporizador = true;
  }

  if(lockCard)return false;//para que la primera carta se vuelva a tapar si no hace match
    this.classList.add('flip');
   
  if(!firstCard){
    firstCard = this;
    return false;
  }
   
  secondCard = this;
  checkForMatch();
}
function checkForMatch(){
  let isMatch = firstCard.dataset.card === secondCard.dataset.card;
  console.log(isMatch);

  //condición ? expresión1 : expresión2;
  //var miEdad = 24;
  // var mayorEdad = (miEdad > 18) ? “Sí, eres mayor de edad” : “No, sigue intentando”;
  !isMatch ? disableCards() : resetCards(isMatch);
 
//Incrementar movimientos
  movimientos++;
  mostrarMovimientos.innerHTML= `Movimientos: ${movimientos}`;
    if(firstCard == secondCard){
    lockCard = 0;

//Aumentar Aciertos
  aciertos++;
  mostrarAciertos.innerHTML = `Aciertos:${aciertos}`;
    if (aciertos == 10){
      clearInterval(tiempoRegresivoId);
      mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`
      mostrarTiempo.innerHTML = `Tiempo: ${timerInicial - timer} segundos`;
      mostrarMovimientos.innerHTML =`Movimientos: ${movimientos}`; 
    }
  }
}

//Desactivar  cartas
  function disableCards(){
    lockCard = true; //Para que al voltear dos cartas no permita voltear otra más
    //setTimeout()método llama a una función después de una cantidad de milisegundos.
    //1 segundo = 1000 milisegundos.
      setTimeout(()=> {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetCards();
      }, 800);  
    }
 //Vuelven a su posicion original las cartas que no hacen match
  function resetCards(isMatch = false){
    if(isMatch){
      firstCard.removeEventListener('click', flipCard);
      secondCard.removeEventListener('click', flipCard); 
      }
      [firstCard,secondCard,lockCard] = [null, null, false]; // permite desbloquear las demas cartas 
    } 
   
    cards.forEach(card => {
      card.addEventListener('click', flipCard)
  });













   
      /*(function shuffle(){
        cards.forEach (card =>{
            let randomPos = Math.floor(Math.random() * 10);
            card.style.order= randomPos;
        });
      })();*/

>>>>>>> Rama-Pamela
