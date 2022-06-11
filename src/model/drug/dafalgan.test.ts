import { Dafalgan } from './dafalgan';

describe('Dafalgan', () => {
  let dafalgan: Dafalgan;

  beforeEach(() => {
    dafalgan = new Dafalgan(30, 5);
  });

  it('should not allow for a negative benefit', () => {
    dafalgan.benefit = -5;
    expect(dafalgan).toMatchSnapshot();
  });

  it('should not allow for a benefit greater than 50', () => {
    dafalgan.benefit = 51;
    expect(dafalgan).toMatchSnapshot();
  });

  it('should return expiration status', () => {
    expect(dafalgan.isExpired()).toBe(false);
    dafalgan.expiresIn = 0;
    expect(dafalgan.isExpired()).toBe(true);
  });

  it('should decrease expiresIn and benefit over time', () => {
    dafalgan.updateValues();
    expect(dafalgan).toMatchSnapshot();
  });

  it('should decrease benefit twice as much if expired', () => {
    dafalgan.expiresIn = 0;
    dafalgan.updateValues();
    expect(dafalgan).toMatchSnapshot();
  });

  it('should be serializable to JSON', () => {
    expect(dafalgan.toJSON()).toMatchSnapshot();
  });

  it('should be serializable to string', () => {
    expect(dafalgan.toString()).toMatchSnapshot();
  });
});
