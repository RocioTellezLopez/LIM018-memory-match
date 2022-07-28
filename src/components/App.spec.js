import App from './App.js';
import {dataDoble, shuffle, createCard, matchModal, matchCard} from './App.js'
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

describe('matchModal', () => {
  it ('deberia devolver true si todas las cartas estan destapadas', () => {
    const cardFlip = [1,2,3,4]
    const matchAll = matchModal(cardFlip)
    expect(matchAll).toBe(true)
  });
  it ('deberia devolver false si las cartas no se destapan', () => {
    const cardNoFlip = [1,2,3,4,5]
    const matchNoAll = matchModal(cardNoFlip)
    expect(matchNoAll).toBe(false)
  });
});

describe('matchCard', () => {
  it('deberia de ser una funcion', () => {
      expect(typeof matchCard).toBe('function')
  });

  it ('deberia devolver un arreglo con dos nodos', () => {
    const card1 = document.createElement('div')
    card1.setAttribute('name', 'node')
    card1.className = 'flip'
    const card2 = document.createElement('div')
    card2.setAttribute('name', 'Js')
    card2.className = 'flip'
    document.body.appendChild(card1)
    document.body.appendChild(card2)
    const cartas = matchCard(card1,card2)
    expect(cartas).toHaveLength(2)
  });

  it ('deberia de no hacer match', () => {
    const div1 = document.createElement('div')
    div1.setAttribute('name', 'node')
    div1.className = 'flip'
    const div2 = document.createElement('div')
    div2.setAttribute('name', 'Js')
    div2.className = 'flip'
    document.body.appendChild(div1)
    document.body.appendChild(div2)
    console.log(document.body.innerHTML)
  })

});



