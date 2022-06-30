
//jest.spyOn(global, 'setInterval');
import {createTimer} from "./timer";

describe('createTimer', () => {
  beforeEach(() => {
    document.body.innerHTML = '<p id="timer"></p>'
  });
  //const root = document.body;
  //root.innerHTML= `<div id="timer"></div>`;

  it('should be a function', ()=> {
    expect(typeof createTimer).toBe('function');  
  });

  it('should render without crashing', () => {

    const t = createTimer();
    expect(t instanceof HTMLElement).toBe(true);
  });
}); 


test('waits 600 microseconds before starting the game', () => {
  const createTimer = require('./timer.js');
  //createTimer();
  jest.useFakeTimers();
  expect(createTimer).toHaveBeenCalledTimes(1);
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