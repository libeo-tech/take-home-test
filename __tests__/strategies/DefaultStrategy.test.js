import Drug from '../../entities/Drug';
import DefaultStrategy from '../../strategies/DefaultStrategy';

describe('DefaultStrategy', () => {
  describe('update method', () => {
    it('should decrement expiresIn by 1', () => {
      const drug = new Drug("Doliprane", 5, 10);
      const strategy = new DefaultStrategy();
      strategy.update(drug);
      expect(drug.expiresIn).toBe(4);
    });

    it('should decrement benefit by 1 when expiresIn is greater than 0', () => {
      const drug = new Drug("Doliprane", 5, 10);
      const strategy = new DefaultStrategy();
      strategy.update(drug);
      expect(drug.benefit).toBe(9);
    });

    it('should decrement benefit by 2 when expiresIn is less than or equal to 0', () => {
      const drug = new Drug("Doliprane", 0, 10);
      const strategy = new DefaultStrategy();
      strategy.update(drug);
      expect(drug.benefit).toBe(8);
    });
  });
});
