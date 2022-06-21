import createCards from './App.js';

describe('createCards', () => {
  it('should render without crashing', () => {
    const el = createCards();
    expect(el instanceof HTMLElement).toBe(true);
  });
});
