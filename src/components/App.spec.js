// import App from './App.js';
import webdev from '../data/webdev/webdev.js'
import {dataDoble, shuffle} from './App.js'

// describe('App', () => {
//   it('should render without crashing', () => {
//     const el = App();
//     expect(el instanceof HTMLElement).toBe(true);
//   });
// });


describe('dataDoble', () => {

  it('deberia de ser una funcion', () => {
      expect(typeof dataDoble).toBe('function')
  })
  it('deberia devolver una cadena de longitud 20', () => {
    const webdevItems = webdev.items
    expect(dataDoble(webdevItems)).toHaveLength(20)
  })
})

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
    // console.log(arrayOriginal)
    const arrayRandom = shuffle(arrayOriginal);
    // console.log(arrayRandom);
    // console.log('array original', arrayOriginal)
    // expect(arrayRandom).not.toEqual([1,2,3]);
    expect(shuffle(arrayOriginal)).not.toEqual(arrayRandom)
  })
})

