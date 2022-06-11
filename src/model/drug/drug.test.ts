import { DrugName } from '../../type/DrugName';
import { Drug } from './drug';

describe('Drug', () => {
  let drug: Drug;

  beforeEach(() => {
    drug = new Drug(DrugName.TEST, 30, 5);
  });

  it('should not allow for a negative benefit', () => {
    drug.benefit = -1;
    expect(drug).toMatchSnapshot();
  });

  it('should not allow for a benefit greater than 50', () => {
    drug.benefit = 51;
    expect(drug).toMatchSnapshot();
  });

  it('should return expiration status', () => {
    expect(drug.isExpired()).toBe(false);
    drug.expiresIn = 0;
    expect(drug.isExpired()).toBe(true);
  });

  it('should decrease expiresIn and benefit over time', () => {
    drug.updateValues();
    expect(drug).toMatchSnapshot();
  });

  it('should decrease benefit twice as much if expired', () => {
    drug.expiresIn = 0;
    drug.updateValues();
    expect(drug).toMatchSnapshot();
  });

  it('should be serializable to JSON', () => {
    expect(drug.toJSON()).toMatchSnapshot();
  });

  it('should be serializable to string', () => {
    expect(drug.toString()).toMatchSnapshot();
  });
});
