import forceRange from '../../utils/forceRange';

describe('forceRange', () => {
  it('should return the value when it is within the specified range', () => {
    const result = forceRange(10, 5, 20);
    expect(result).toBe(10);
  });

  it('should adjust the value to the minimum when it is below the specified range', () => {
    const result = forceRange(3, 5, 20);
    expect(result).toBe(5);
  });

  it('should adjust the value to the maximum when it is above the specified range', () => {
    const result = forceRange(25, 5, 20);
    expect(result).toBe(20);
  });

  it('should throw an error for undefined value', () => {
    expect(() => forceRange(undefined, 5, 20)).toThrowError('Invalid value');
  });

  it('should throw an error for null value', () => {
    expect(() => forceRange(null, 5, 20)).toThrowError('Invalid value');
  });

  it('should throw an error for undefined min', () => {
    expect(() => forceRange(10, undefined, 20)).toThrowError('Invalid min');
  });

  it('should throw an error for null min', () => {
    expect(() => forceRange(10, null, 20)).toThrowError('Invalid min');
  });

  it('should throw an error for undefined max', () => {
    expect(() => forceRange(10, 5, undefined)).toThrowError('Invalid max');
  });

  it('should throw an error for null max', () => {
    expect(() => forceRange(10, 5, null)).toThrowError('Invalid max');
  });
});
