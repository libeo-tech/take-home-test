import Drug from '../../entities/Drug';
import FervexStrategy from '../../strategies/FervexStrategy';

describe('FervexStrategy', () => {
  describe('update method', () => {
    it('should decrement expiresIn by 1', () => {
      let drug = new Drug('Fervex', 6, 10);
      const strategy = new FervexStrategy();
      drug = strategy.update(drug);
      expect(drug.expiresIn).toBe(5);
    });

    it('should set benefit to 0 when expiresIn is less than or equal to 0', () => {
      let drug = new Drug('Fervex', 0, 10);
      const strategy = new FervexStrategy();
      drug = strategy.update(drug);
      expect(drug.benefit).toBe(0);
    });

    it('should increase benefit by 3 when expiresIn is 5 or less, up to a maximum of 50', () => {
      let drug = new Drug('Fervex', 5, 10);
      const strategy = new FervexStrategy();
      drug = strategy.update(drug);
      expect(drug.benefit).toBe(13);
    });

    it('should increase benefit by 2 when expiresIn is 10 or less, up to a maximum of 50', () => {
      let drug = new Drug('Fervex', 8, 10);
      const strategy = new FervexStrategy();
      drug = strategy.update(drug);
      expect(drug.benefit).toBe(12);
    });

    it('should increase benefit by 1 when expiresIn is more than 10, up to a maximum of 50', () => {
      let drug = new Drug('Fervex', 15, 10);
      const strategy = new FervexStrategy();
      drug = strategy.update(drug);
      expect(drug.benefit).toBe(11);
    });

    it('should not exceed maximum benefit of 50', () => {
      let drug = new Drug('Fervex', 5, 48);
      const strategy = new FervexStrategy();
      drug = strategy.update(drug);
      expect(drug.benefit).toBe(50);
    });
  });
});
