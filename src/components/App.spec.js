import App from './App.js';
import {dataDoble, shuffle} from './App.js'


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

describe('shuffle', () => {
  it ('deberia de ser una funcion', () => {
    expect(typeof shuffle).toBe('function')
  })
  it ('no deberia de modificar la longitud del elemento', () => {
    const data = [1,2,3,4,5]
    expect(shuffle(data)).toHaveLength(5)
  })
  it ('deberia de devolver el elemento con posiciones diferente', () => {
    const data = [1,2,3,4,5]
    const dataRandom = shuffle(data)
    expect(data).not.toEqual(dataRandom)
  })
})

