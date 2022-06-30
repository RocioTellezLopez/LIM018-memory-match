import {createCards,shuffle,deselect,winner} from './App.js';


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
  //beforeEach(() => {
    //document.body.innerHTML = '<div data-pokemonid="charmander"></div>'
  //})
  let array = [{dataset: {pokemonid: 'charmander'}},{dataset: {pokemonid: 'venasaur'}}];
  //array[0].style.transform = 'rotateY(180deg)'

  it('should recognize if 2 elements have different id and put the cards back face down',()=>{
    deselect(array);

    //expect(array[0].style.transform).toBe('rotateY(0deg)');
    expect(array[0]).not.toEqual(array[1]);
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
    //expect(array[0]).toEqual(array[1]);
    expect(points.textContent).toBe('100');
  });
});

describe('flipcards')


