import App from './App.js';
import {shuffle} from './App.js';
import {dataDoble} from './App.js';
//import {items} from '../data/webdev/webdev.js'


document.body.innerHTML="<div id='root'></div>"

describe('App', () => {
  it('should render without crashing', () => {
    const el = App();
    expect(el instanceof HTMLElement).toBe(true);
  });

});

describe('shuffle', () => {
  it('Debe ser una función', () => {
    expect(typeof shuffle).toBe('function');
  });
  it('No debe modificar la longitud del array',()=>{
    const data = [1, 2, 3, 4]
    expect(shuffle(data)).toHaveLength(4);
  });
  it('Deberìa devolver el elemento con posiciones diferentes',()=>{
    const data = [1, 2, 3, 4]
    const dataRandom = shuffle(data)
    expect(data).not.toEqual(dataRandom);
  });
  });

  describe('dataDoble', ()=>{
    it('Deberìa duplicar la data',()=>{
      let data = dataDoble([1, 2, 3, 4])
      expect(data).toHaveLength(8);
    });
  });


  /*describe('webdev', ()=>{
    it('El item image deberìa estar dentro del array',()=>{
      expect(webdev.items).toHaveProperty('image');
    });
  });*/


  