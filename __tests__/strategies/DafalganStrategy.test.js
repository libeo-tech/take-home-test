import Drug from '../../entities/Drug';
import DafalganStrategy from '../../strategies/DafalganStrategy';

describe('DafalganStrategy', () => {
  describe('update method', () => {
    it('should decrement expiresIn by 1', () => {
      let drug = new Drug("Dafalgan", 6, 10);
      const strategy = new DafalganStrategy();
      drug = strategy.update(drug);
      expect(drug.expiresIn).toBe(5);
    });

    it('should decrement benefit by 4 when expiresIn is less than or equal to 0', () => {
      let drug = new Drug("Dafalgan", 0, 10);
      const strategy = new DafalganStrategy();
      drug = strategy.update(drug);
      expect(drug.benefit).toBe(6);
    });

    it('should decrement benefit by 2 when expiresIn is greater than 0', () => {
      let drug = new Drug("Dafalgan", 5, 10);
      const strategy = new DafalganStrategy();
      drug = strategy.update(drug);
      expect(drug.benefit).toBe(8);
    });
  });
});
