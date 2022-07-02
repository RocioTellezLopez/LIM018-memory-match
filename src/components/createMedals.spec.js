import createMedals from './medals.js';

describe('createMedals', () => {
    
    it('should render without crashing', () => {
      const medals = document.createElement('div');
      expect(medals instanceof HTMLElement).toBe(true);
    });
  
    it('should create html element with a golden medal', ()=> {
      const medals = document.createElement('div');
      medals.classList='medals'
      medals.innerHTML= `<img src="./img/medalla-de-oro.png"/>`
      expect(createMedals(20)).toEqual(medals);
    });
  
    it('should create html element with a silver medal', ()=> {
      const medals = document.createElement('div');
      medals.classList='medals'
      medals.innerHTML= `<img src="./img/medalla-de-plata.png"/>`
      expect(createMedals(30)).toEqual(medals);
    });
  
    it('should create html element with a bronze medal', ()=> {
      const medals = document.createElement('div');
      medals.classList='medals'
      medals.innerHTML= `<img src="./img/medalla-de-bronce.png"/>`
      expect(createMedals(40)).toEqual(medals);
    });
  
  });
  
  