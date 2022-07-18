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
    expect(dataDoble(webdevItems).length).toBe(20)
  })
})

describe('shuffle', () => {

  it('deberia de ser una funcion', () => {
      expect(typeof shuffle).toBe('function')
  })
  it('deberia devolver un arreglo sin modificar su longitud', () => {
    const webdevItems = webdev.items
    expect(shuffle(webdevItems).length).toBe(10)
  })
})

