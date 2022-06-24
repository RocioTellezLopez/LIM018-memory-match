import { createCards,shuffle, flipCards } from './App.js';
import {createTimer} from './timer.js'
import { fireEvent } from '@testing-library/react';




describe('createCards', () => {
  const areaCarta = createCards();

  it('should render without crashing', () => {
    expect(areaCarta instanceof HTMLElement).toBe(true);
  });

  it('should be a function', () => {
    expect(typeof createCards).toBe('function');
  });

  it('should create 18 elements with .tarjeta class', () => {
    expect(areaCarta.querySelectorAll('.tarjeta').length).toBe(18);
  } )
});

describe('shuffle', () => {

  it('should be a function', () => {
    expect(typeof shuffle).toBe('function');
  });

  it('shuffle and not modifided the length of the array', ()=>{
    expect(shuffle([1,2,3]).length).toBe(3);
  })

  it('que el orden inicial de un array no sea igual luego de ejecutar la funcion shuffle ', ()=>{
    const valorInicial = [0,1,2,3,4]
    const aletorio = shuffle([...valorInicial])
    expect(aletorio).not.toBe(valorInicial)
  })
});

describe('createTimer', () => {

  it('should be a function', () => {
    expect(typeof createTimer).toBe('function');
  });
});

describe('flipCards', () => {
  it('should be a function', () => {
    expect(typeof flipCards).toBe('function');
  });
  it('al ejecutar la funcion flipCards se almacena un valor en un array ', () => {
    const selectCards = []
    const tarjeta = document.createElement("div");
    //flipCards(fireEvent.click(tarjeta))
    //flipCards(fireEvent.click(tarjeta))
    tarjeta.addEventListener("click", (event)=> {
      flipCards(event,selectCards)
    });
    fireEvent.click(tarjeta)
    console.log(selectCards)
    //fireEvent.click(tarjeta)
    expect(selectCards.length).toBe(1);
  });
});

/*document.body.innerHTML = '<p id="timer"></p>';

it('should create the time count', async () => {

  const {createTimer} = await import('./timer.js');
  expect {createTimer('2:00')}.toBe('1:59');

  const timer = document.getElementById("timer")

  expect( timer.innerHTML).toBe('<p id="timer">1:59</p>');
});*/