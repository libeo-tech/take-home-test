import { MagicPill } from './magicPill';

describe('Magic Pill', () => {
  let magicPill: MagicPill;

  beforeEach(() => {
    magicPill = new MagicPill(30, 5);
  });

  it('should not allow for a negative benefit', () => {
    magicPill.benefit = -5;
    expect(magicPill).toMatchSnapshot();
  });

  it('should not allow for a benefit greater than 50', () => {
    magicPill.benefit = 51;
    expect(magicPill).toMatchSnapshot();
  });

  it('should return expiration status', () => {
    expect(magicPill.isExpired()).toBe(false);
    magicPill.expiresIn = 0;
    expect(magicPill.isExpired()).toBe(false);
  });

  it('should not change expiration or benefit with time', () => {
    magicPill.updateValues();
    expect(magicPill).toMatchSnapshot();

    magicPill.expiresIn = 0;
    expect(magicPill).toMatchSnapshot();

    magicPill.expiresIn = 30;
    expect(magicPill).toMatchSnapshot();
  });

  it('should be serializable to JSON', () => {
    expect(magicPill.toJSON()).toMatchSnapshot();
  });

  it('should be serializable to string', () => {
    expect(magicPill.toString()).toMatchSnapshot();
  });
});
