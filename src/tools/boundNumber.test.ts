import { boundNumber } from './boundNumber';

describe('boundNumber', () => {
  it('should still work if min and max are swapped', () => {
    expect(boundNumber(5, 10, 0)).toBe(5);
    expect(boundNumber(-5, 10, 0)).toBe(0);
    expect(boundNumber(50, 10, 0)).toBe(10);
  });

  it('should return x if min <= x <= max', () => {
    expect(boundNumber(20, 20, 40)).toBe(20);
    expect(boundNumber(30, 20, 40)).toBe(30);
    expect(boundNumber(40, 20, 40)).toBe(40);
  });

  it('should return min if x <= min', () => {
    expect(boundNumber(5, 5, 10)).toBe(5);
    expect(boundNumber(-5, 5, 10)).toBe(5);
  });

  it('should return max if x >= max', () => {
    expect(boundNumber(20, 5, 20)).toBe(20);
    expect(boundNumber(120, 5, 20)).toBe(20);
  });
});
