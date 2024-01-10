import Drug from '../../entities/Drug';
import HerbalTeaStrategy from '../../strategies/HerbalTeaStrategy';

describe('HerbalTeaStrategy', () => {
  describe('update method', () => {
    it('should decrement expiresIn by 1', () => {
      let drug = new Drug('Herbal Tea', 6, 10);
      const strategy = new HerbalTeaStrategy();
      drug = strategy.update(drug);
      expect(drug.expiresIn).toBe(5);
    });

    it('should increase benefit by 2 when expiresIn is less than or equal to 0, up to a maximum of 50', () => {
      let drug = new Drug('Herbal Tea', 0, 10);
      const strategy = new HerbalTeaStrategy();
      drug = strategy.update(drug);
      expect(drug.benefit).toBe(12);
    });

    it('should increase benefit by 1 when expiresIn is greater than 0, up to a maximum of 50', () => {
      let drug = new Drug('Herbal Tea', 5, 10);
      const strategy = new HerbalTeaStrategy();
      drug = strategy.update(drug);
      expect(drug.benefit).toBe(11);
    });

    it('should not exceed maximum benefit of 50', () => {
      let drug = new Drug('Herbal Tea', 0, 49);
      const strategy = new HerbalTeaStrategy();
      drug = strategy.update(drug);
      expect(drug.benefit).toBe(50);
    });
  });
});
