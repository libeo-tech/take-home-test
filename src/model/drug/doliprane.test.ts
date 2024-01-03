import { Doliprane } from './doliprane';

describe('Doliprane', () => {
  let doliprane: Doliprane;

  beforeEach(() => {
    doliprane = new Doliprane(30, 5);
  });

  it('should not allow for a negative benefit', () => {
    doliprane.benefit = -5;
    expect(doliprane).toMatchSnapshot();
  });

  it('should not allow for a benefit greater than 50', () => {
    doliprane.benefit = 51;
    expect(doliprane).toMatchSnapshot();
  });

  it('should return expiration status', () => {
    expect(doliprane.isExpired()).toBe(false);
    doliprane.expiresIn = 0;
    expect(doliprane.isExpired()).toBe(true);
  });

  it('should decrease expiresIn and benefit over time', () => {
    doliprane.updateValues();
    expect(doliprane).toMatchSnapshot();
  });

  it('should decrease benefit twice as much if expired', () => {
    doliprane.expiresIn = 0;
    doliprane.updateValues();
    expect(doliprane).toMatchSnapshot();
  });

  it('should be serializable to JSON', () => {
    expect(doliprane.toJSON()).toMatchSnapshot();
  });

  it('should be serializable to string', () => {
    expect(doliprane.toString()).toMatchSnapshot();
  });
});
