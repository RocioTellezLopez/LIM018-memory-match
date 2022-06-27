import {createTimer} from "./timer";

describe('createTimer', () => {
  const root = document.body;
  root.innerHTML= `<div id="timer"></div>`;

  it('should be a function', ()=> {
    expect(typeof createTimer).toBe('function');  
  });

  it('should render without crashing', () => {
    const timer = document.createElement("div");
    expect(createTimer(timer) instanceof HTMLElement).toEqual(true);
  });

})

jest.useFakeTimers();
//jest.spyOn(global, 'setInterval');

test('waits 1 second before ending the game', () => {
  const timerGame = require('../timerGame');
  timerGame();

  expect(setTimeout).toHaveBeenCalledTimes(1);
  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
});

/*describe('starCounter', () => {
    it('', () => {
      expect(startCounter())  
    }) 
})*/
/*const mockCallback = jest.fn(x => 42 + x);
startCounter(mockCallback);

expect(mockCallback.mock.calls[0]).toBe(0)*/