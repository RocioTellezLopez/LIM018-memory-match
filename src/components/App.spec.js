import { createCards,shuffle} from './App.js';
import createMedals from './medallas.js';

//import { fireEvent } from '@testing-library/react';




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

describe('createMedals', () => {
  
  it('should be a function', () => {
    expect(typeof createMedals).toBe('function');
  });
  
  it('should render without crashing', () => {
    const medallas = document.createElement('div');
    expect(medallas instanceof HTMLElement).toBe(true);
  });

  it('should create html element with a golden medal', ()=> {
    const medallas = document.createElement('div');
    medallas.classList='medallas'
    medallas.innerHTML= `<img src="./img/medalla-de-oro.png"/>`
    expect(createMedals(20)).toEqual(medallas);
  });

  it('should create html element with a silver medal', ()=> {
    const medallas = document.createElement('div');
    medallas.classList='medallas'
    medallas.innerHTML= `<img src="./img/medalla-de-plata.png"/>`
    expect(createMedals(30)).toEqual(medallas);
  });

  it('should create html element with a bronze medal', ()=> {
    const medallas = document.createElement('div');
    medallas.classList='medallas'
    medallas.innerHTML= `<img src="./img/medalla-de-bronce.png"/>`
    expect(createMedals(40)).toEqual(medallas);
  });

});



