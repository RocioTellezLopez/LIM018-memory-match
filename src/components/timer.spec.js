import {createTimer} from "./timer";

describe('createTimer', () => {
  const root = document.body;
  root.innerHTML= `<div id="timer"></div>`;

  it('should be a function', ()=> {
    expect(typeof createTimer).toBe('function');  
  });

  it('should render without crashing', () => {
    expect(createTimer() instanceof HTMLElement).toEqual(true);
  });

})

jest.useFakeTimers();
//jest.spyOn(global, 'setInterval');

test('waits 1 second before start the game', () => {
  const starCounter = require('./timer.js');
  starCounter;

  expect(setInterval).toHaveBeenCalledTimes(1);
  expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 1000);
});


/*describe('starCounter', () => {
    it('', () => {
      expect(startCounter())  
    }) 
})*/
/*const mockCallback = jest.fn(x => 42 + x);
startCounter(mockCallback);

expect(mockCallback.mock.calls[0]).toBe(0)*/