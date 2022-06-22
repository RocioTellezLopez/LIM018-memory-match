import {createCards,shuffle} from './App.js';
import {createTimer} from './timer.js'

describe('createCards', () => {
  const areaCarta = createCards();

  it('should render without crashing', () => {
    expect(areaCarta instanceof HTMLElement).toBe(true);
  });

  it('should be a function', () => {
    expect(typeof createCards).toBe('function');
  });

  it('should create 18 elements with .tarjeta class', () => {
    expect(areaCarta.querySelectorAll('.tarjeta').length).toBe(18);
  } )
});

describe('shuffle', () => {

  it('should be a function', () => {
    expect(typeof shuffle).toBe('function');
  });

  it('shuffle and not modifided the length of the array', ()=>{
    expect(shuffle([1,2,3]).length).toBe(3);
  })
});

describe('createTimer', () => {

  it('should be a function', () => {
    expect(typeof createTimer).toBe('function');
  });
});

/*document.body.innerHTML = '<p id="timer"></p>';

it('should create the time count', async () => {

  const {createTimer} = await import('./timer.js');
  expect {createTimer('2:00')}.toBe('1:59');

  const timer = document.getElementById("timer")

  expect( timer.innerHTML).toBe('<p id="timer">1:59</p>');
});*/