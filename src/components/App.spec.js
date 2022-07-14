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
});

describe('num', () => {
  it('No debe ser una función', () => {
    expect(typeof num).not.toBe('function');
  });
});