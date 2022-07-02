import {createCards,shuffle,deselect,winner,counterTurns} from './App.js';
jest.useFakeTimers();
// eslint-disable-next-line no-undef
jest.spyOn(global, 'setTimeout');

describe('createCards', () => {
  const pokemones = [
        { id: 'bulbasaur', image: 'https://www.serebii.net/pokemongo/pokemon/001.png'},
        { id: 'ivysaur', image: 'https://www.serebii.net/pokemongo/pokemon/002.png'},
        { id: 'venusaur', image: 'https://www.serebii.net/pokemongo/pokemon/003.png'},
        { id: 'bulbasaur', image: 'https://www.serebii.net/pokemongo/pokemon/001.png'},
        { id: 'ivysaur', image: 'https://www.serebii.net/pokemongo/pokemon/002.png'},
        { id: 'venusaur', image: 'https://www.serebii.net/pokemongo/pokemon/003.png'},
      ];
  const cardArea = createCards(pokemones);

  it('should render without crashing', () => {
    expect(cardArea instanceof HTMLElement).toBe(true);
  });

  it('should create 6 elements with .card class', () => {
    expect(cardArea.querySelectorAll('.card').length).toBe(6);
  } );

});

describe('shuffle', () => {

  it('shuffle and not modifided the length of the array', ()=>{
    expect(shuffle([1,2,3]).length).toBe(3);
  });

  it('the inicial order of an array not to be equal after shuffle function execution', ()=>{
    const initialValue = [0,1,2,3,4];
    //const randomValue = [1,2,0,4,3];
    //let currIndex = 0;
    //Math.random = jest.fn(() => {
      //const curr = randomValue[currIndex]
      //currIndex += 1;
    //return curr; 
    //});
    const random = shuffle([...initialValue]);
    expect(random).not.toBe(initialValue);
  });
});

describe('deselect', ()=>{
  let array;
  beforeEach(() => {
    document.body.innerHTML = '<div data-pokemonid="charmander" class="rotated"></div>';
    document.body.innerHTML += '<div data-pokemonid="venasaur" class="rotated"></div>'
    array = [...document.getElementsByClassName("rotated")];
})

it('should recognize if 2 elements have different id and put the cards back face down',()=>{
    deselect(array);
    jest.runAllTimers();
    
    expect(array[0].style.transform).toBe('rotateY(0deg)');

  })

});

describe('winner', ()=>{
  beforeEach(() => {
    document.body.innerHTML = '<div id="points">0</div>'
  })
  let array = [{dataset: {pokemonid: 'charmander'}},{dataset: {pokemonid: 'charmander'}}];

  it('should recognize if 2 elements have the same id and add 100 points to the score',()=>{
    winner(array);
    const points = document.getElementById("points");
    
    expect(points.textContent).toBe('100');
  });
});

describe('counterTurns', () => {
  beforeEach(() =>{
    document.body.innerHTML = '<div id="turns">0</div>'
  })
  
  it('should render without crashing', () => {
    let trn = counterTurns([]); 
    expect(trn instanceof HTMLElement).toBe(true);
  });
  
  it('should count the turns', () => {
    let trn = counterTurns([]);
    
    expect(trn.innerHTML).toBe('0');
  });
  
  it('should count the turns', () => {
    let trn = counterTurns([1,2]);
    
    expect(trn.innerHTML).toBe('1');
  });
  
})

/*
describe('createLoser', ()=>{
  beforeEach(() =>{
    document.body.innerHTML = '<div id="modalContainer" style="opacity:1"></div>'
  })
  it('debe indicar que perdiste ', () =>{
    const result = document.createElement('div');
    result.classList='result'
    result.innerHTML= `<img src="./img/llorar.png">`

    const message = document.createElement('div');
    message.innerHTML = 'Intentalo otra vez'

    expect(createLoser() instanceof HTMLElement).tobe(true);
    });
    
  })
*/

//describe('flipcards')
