import { Fervex } from './fervex';

describe('Fervex', () => {
  let fervex: Fervex;

  beforeEach(() => {
    fervex = new Fervex(30, 5);
  });

  it('should not allow for a negative benefit', () => {
    fervex.benefit = -5;
    expect(fervex).toMatchSnapshot();
  });

  it('should not allow for a benefit greater than 50', () => {
    fervex.benefit = 51;
    expect(fervex).toMatchSnapshot();
  });

  it('should return expiration status', () => {
    expect(fervex.isExpired()).toBe(false);
    fervex.expiresIn = 0;
    expect(fervex.isExpired()).toBe(true);
  });

  it('should increase benefit with time', () => {
    fervex.updateValues();
    expect(fervex).toMatchSnapshot();
  });

  test('benefit + 2 if 10 >= expiresIn > 5', () => {
    fervex.expiresIn = 10;
    fervex.updateValues();
    expect(fervex).toMatchSnapshot();

    fervex.expiresIn = 6;
    fervex.updateValues();
    expect(fervex).toMatchSnapshot();
  });

  test('benefit + 3 if 5 >= expiresIn > 0', () => {
    fervex.expiresIn = 5;
    fervex.updateValues();
    expect(fervex).toMatchSnapshot();

    fervex.expiresIn = 1;
    fervex.updateValues();
    expect(fervex).toMatchSnapshot();
  });

  test('benefit drops to 0 if 0 >= expiresIn > -∞', () => {
    fervex.expiresIn = 0;
    fervex.updateValues();
    expect(fervex).toMatchSnapshot();
  });

  it('should be serializable to JSON', () => {
    expect(fervex.toJSON()).toMatchSnapshot();
  });

  it('should be serializable to string', () => {
    expect(fervex.toString()).toMatchSnapshot();
  });
});
