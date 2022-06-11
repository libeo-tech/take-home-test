import { HerbalTea } from './herbalTea';

describe('Herbal Tea', () => {
  let herbalTea: HerbalTea;

  beforeEach(() => {
    herbalTea = new HerbalTea(30, 5);
  });

  it('should not allow for a negative benefit', () => {
    herbalTea.benefit = -5;
    expect(herbalTea).toMatchSnapshot();
  });

  it('should not allow for a benefit greater than 50', () => {
    herbalTea.benefit = 51;
    expect(herbalTea).toMatchSnapshot();
  });

  it('should return expiration status', () => {
    expect(herbalTea.isExpired()).toBe(false);
    herbalTea.expiresIn = 0;
    expect(herbalTea.isExpired()).toBe(true);
  });

  it('should increase benefit with time', () => {
    herbalTea.updateValues();
    expect(herbalTea).toMatchSnapshot();
  });

  it('should increase benefit twice as much if expired', () => {
    herbalTea.expiresIn = 0;
    herbalTea.updateValues();
    expect(herbalTea).toMatchSnapshot();
  });

  it('should be serializable to JSON', () => {
    expect(herbalTea.toJSON()).toMatchSnapshot();
  });

  it('should be serializable to string', () => {
    expect(herbalTea.toString()).toMatchSnapshot();
  });
});
