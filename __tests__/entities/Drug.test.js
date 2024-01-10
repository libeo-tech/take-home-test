import Drug from '../../entities/Drug';

describe('Drug', () => {
  // Test case for the constructor
  it('should create a drug with the given name, expiresIn, and benefit', () => {
    const drug = new Drug('Aspirin', 10, 5);
    expect(drug.name).toBe('Aspirin');
    expect(drug.expiresIn).toBe(10);
    expect(drug.benefit).toBe(5);
  });

  // Test case for isExpired method
  describe('isExpired', () => {
    it('should return true if expiresIn is less than 0', () => {
      const expiredDrug = new Drug('ExpiredDrug', -1, 5);
      expect(expiredDrug.isExpired()).toBe(true);
    });

    it('should return false if expiresIn is greater than or equal to 0', () => {
      const nonExpiredDrug = new Drug('NonExpiredDrug', 5, 10);
      expect(nonExpiredDrug.isExpired()).toBe(false);
    });
  });
});
