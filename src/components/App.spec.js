import App from './App.js';
import {shuffle} from './App.js';
import {num} from './App.js';

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
  /*it('Debe barajar las cartas', () =>{
    for(let i = num.length-1; i>0; i--){
      let a = Math.floor(Math.random() * (i + 1));
    expect([1,2,3,4]).toBe([4,3,2,1]);
  }*/
});

describe('num', () => {
  it('No debe ser una función', () => {
    expect(typeof num).not.toBe('function');
  });
});