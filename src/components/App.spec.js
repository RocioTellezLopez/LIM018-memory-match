import {createCards,shuffle,deseleccionar,winner} from './App.js';
import createMedals from './medals.js';

[{dataset: {pokemonid: 'charmander'}},{dataset: {pokemonid: 'charmander'}}]


describe('createCards', () => {
  const areaCarta = createCards();

  it('should render without crashing', () => {
    expect(areaCarta instanceof HTMLElement).toBe(true);
  });

  it('should create 18 elements with .tarjeta class', () => {
    expect(areaCarta.querySelectorAll('.tarjeta').length).toBe(18);
  } );

});

describe('shuffle', () => {

  it('shuffle and not modifided the length of the array', ()=>{
    expect(shuffle([1,2,3]).length).toBe(3);
  });

  it('the inicial oreder of ana array not to be equal after shuffle function execution', ()=>{
    const initialValue = [0,1,2,3,4];
    const random = shuffle([...initialValue]);
    expect(random).not.toBe(initialValue);
  });
});

describe('deseleccionar', ()=>{
  let array = [{dataset: {pokemonid: 'charmander'}},{dataset: {pokemonid: 'venasaur'}}];

  it('should recognize if 2 elements have different id',()=>{
    deseleccionar(array);
    expect(array[0]).not.toEqual(array[1]);
  })

  it('que el orden inicial de un array no sea igual luego de ejecutar la funcion shuffle ', ()=>{
    const valorInicial = [0,1,2,3,4]
    const aletorio = shuffle([...valorInicial])
    expect(aletorio).not.toBe(valorInicial)
  })
});

describe('winner', ()=>{
  let array = [{dataset: {pokemonid: 'charmander'}},{dataset: {pokemonid: 'charmander'}}];

  it('should recognize if 2 elements have the same id',()=>{
    winner(array);
    expect(array[0]).toEqual(array[1]);
  })
});

describe('createMedals', () => {
    
  it('should render without crashing', () => {
    const medals = document.createElement('div');
    expect(medals instanceof HTMLElement).toBe(true);
  });

  it('should create html element with a golden medal', ()=> {
    const medals = document.createElement('div');
    medals.classList='medals'
    medals.innerHTML= `<img src="./img/medalla-de-oro.png"/>`
    expect(createMedals(20)).toEqual(medals);
  });

  it('should create html element with a silver medal', ()=> {
    const medals = document.createElement('div');
    medals.classList='medals'
    medals.innerHTML= `<img src="./img/medalla-de-plata.png"/>`
    expect(createMedals(30)).toEqual(medals);
  });

  it('should create html element with a bronze medal', ()=> {
    const medals = document.createElement('div');
    medals.classList='medals'
    medals.innerHTML= `<img src="./img/medalla-de-bronce.png"/>`
    expect(createMedals(40)).toEqual(medals);
  });

});



