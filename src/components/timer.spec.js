
import {createTimer,startCounter} from "./timer";
// eslint-disable-next-line no-undef
jest.spyOn(global, 'setInterval');
jest.useFakeTimers();

describe('createTimer', () => {
  beforeEach(() => {
    document.body.innerHTML = '<p id="timer"></p>'
  });

  it('should be a function', ()=> {
    expect(typeof createTimer).toBe('function');  
  });

  it('should render without crashing', () => {

    const t = createTimer();
    expect(t instanceof HTMLElement).toBe(true);
  });
}); 

describe('startCounter', () => {
  it('waits 600 microseconds before starting the game', ()=> {
    startCounter();
    jest.runAllTimers();

    expect(startCounter).toHaveBeenCalledTimes(1);
    //expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 600);
  })
})
