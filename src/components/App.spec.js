import {createCards,shuffle,deseleccionar,winner} from './App.js';
import createMedals from './medallas.js';

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
    const valorInicial = [0,1,2,3,4];
    const aletorio = shuffle([...valorInicial]);
    expect(aletorio).not.toBe(valorInicial);
  });
});

describe('deseleccionar', ()=>{
  let array = [{dataset: {pokemonid: 'charmander'}},{dataset: {pokemonid: 'venasaur'}}];

  it('should recognize if 2 elements have different id',()=>{
    deseleccionar(array);
    expect(array[0]).not.toEqual(array[1]);
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

/*document.body.innerHTML = '<p id="timer"></p>';

it('should create the time count', async () => {

  const {createTimer} = await import('./timer.js');
  expect {createTimer('2:00')}.toBe('1:59');

  const timer = document.getElementById("timer")

  expect( timer.innerHTML).toBe('<p id="timer">1:59</p>');
});*/