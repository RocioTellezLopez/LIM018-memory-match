import App from './App.js';
import {shuffle, dataDoble, dataImagenes} from './App.js';

//import {items} from '../data/webdev/webdev.js'


document.body.innerHTML="<div id='root'></div>"

describe('App', () => {
  it('should render without crashing', () => {
    const el = App();
    expect(el instanceof HTMLElement).toBe(true);
  });

});

describe('shuffle', () => {
  it('Debería ser una función', () => {
    expect(typeof shuffle).toBe('function');
  });
  it('No debería modificar la longitud del array',()=>{
    const data = [1, 2, 3, 4]
    expect(shuffle(data)).toHaveLength(4);
  });
  it('Debería devolver el elemento con posiciones diferentes',()=>{
    const data = [1, 2, 3, 4]
    const dataRandom = shuffle(data)
    expect(data).not.toEqual(dataRandom);
  });
  });

  describe('dataDoble', ()=>{
    it('Debería ser una función', () => {
      expect(typeof dataDoble).toBe('function');
    });
    it('Debería duplicar la data',()=>{
      let data = dataDoble([1, 2, 3, 4])
      expect(data).toHaveLength(8);
    });
  });

  describe('dataImagenes', () => {
    it('Debería ser una función', () => {
      expect(typeof dataImagenes).toBe('function');
    });
    it('Debería devolver la longitud de dataImagenes',() =>{
      let dataImg = dataImagenes()
      expect(dataImg).toHaveLength(10);
    });
    it('El item "image" debería estar dentro del array',() =>{
      let dataImg  = dataImagenes()
      expect(dataImg ).toHaveProperty('image');
    });
  });

  /*describe('webdev', ()=>{
    it('El item image debería estar dentro del array',()=>{
      expect(webdev.items).toHaveProperty('image');
    });
  });*/


  