import MagicPillStrategy from '../../strategies/MagicPillStrategy';

describe('MagicPillStrategy', () => {
  describe('update method', () => {
    it('should return the same drug without any modifications', () => {
      const originalDrug = { name: 'Magic Pill', expiresIn: 10, benefit: 20 };
      const strategy = new MagicPillStrategy();
      const updatedDrug = strategy.update(originalDrug);
      expect(updatedDrug).toEqual(originalDrug);
    });
  });
});
