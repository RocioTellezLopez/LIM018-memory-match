import { createCards,shuffle} from './App.js';
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



