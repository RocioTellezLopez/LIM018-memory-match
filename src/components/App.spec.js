import App from './App.js';
import {dataDoble} from './App.js'


describe('App', () => {
  it('should render without crashing', () => {
    const el = App();
    expect(el instanceof HTMLElement).toBe(true);
  });
});

describe('dataDoble', () => {
  it ('deberia de ser una funcion', () => {
    expect(typeof dataDoble).toBe('function')
  })
  it ('deberia de dublicar el elemento', () => {
    const data = dataDoble([1,2,3,4])
    expect(data).toHaveLength(8)
  }) 
})

