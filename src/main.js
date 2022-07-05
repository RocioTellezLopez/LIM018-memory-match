import App from './components/App.js';


document.getElementById('root').appendChild(App());

let movimientos = 0;
let aciertos = 0;
let temporizador = false;
let timer = 50;
let timerInicial = 50;
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

function flipCard(){
 
  if(temporizador == false){
    contarTiempo();
    temporizador = true;
  }

  if(lockCard)return false;
    this.classList.add('flip');
   
  if(!firstCard){
    firstCard=this;
    return false;
  }
   console.log({lockCard, firstCard});
  secondCard=this;
  checkForMatch();

function checkForMatch(){
  let isMatch = firstCard.dataset.card === secondCard.dataset.card;
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

function disableCards(){
  lockCard = true;
    setTimeout(()=> {
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');
      resetCards();
    }, 1000);  
  }
 
function resetCards(isMatch = false){
  if(isMatch){
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard); 
    }
     [firstCard,secondCard,lockCard] = [null, null, false];   
  } 
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

