import App from './App.js';
import {dataDoble, shuffle, createCard, match} from './App.js'
import webdev from '../data/webdev/webdev.js'


describe('App', () => {
  it('should render without crashing', () => {
    const el = App();
    expect(el instanceof HTMLElement).toBe(true);
  });
});

describe('dataDoble', () => {

  it('deberia de ser una funcion', () => {
      expect(typeof dataDoble).toBe('function')
  })
  it('deberia devolver una cadena de longitud 20', () => {
    const webdevItems = webdev.items
    expect(dataDoble(webdevItems)).toHaveLength(20)
  })
});

describe('shuffle', () => {

  it('deberia de ser una funcion', () => {
      expect(typeof shuffle).toBe('function')
  })
  it('deberia devolver un arreglo sin modificar su longitud', () => {
    const webdevItems = webdev.items
    expect(shuffle(webdevItems)).toHaveLength(10)
  })
  it('deberia devolver un arreglo con diferentes posiciones', () => {
    const arrayOriginal = [1,2,3,4,5,6];
    const arrayRandom = shuffle(arrayOriginal);
    expect(shuffle(arrayOriginal)).not.toEqual(arrayRandom)
  })
});

describe('createCard', () => {
  it('should render without crashing', () => {
    const create = createCard(webdev.items)
    expect(create instanceof HTMLDivElement).toBe(true);
  });
  it('deberia crear 10 elementos div', () => {
    const create = createCard(webdev.items)
    const divCreate = create.querySelectorAll('div')
    expect(divCreate).toHaveLength(10)
  });
  
});

describe('match', () => {
  it ('deberia devolver true si todas las cartas estan destapadas', () => {
    const cardFlip = [1,2,3,4]
    const matchAll = match(cardFlip)
    expect(matchAll).toBe(true)
  })
})



