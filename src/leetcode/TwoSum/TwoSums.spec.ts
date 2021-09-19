import { twoSum } from './TwoSums';

describe('TwoSums', () => {
  it('Should return [] if args {} and 1', () => {
    const actual = twoSum([], 1);
    const expected: number[] = [];
    expect(actual).toStrictEqual(expected);
  });
  it('Should return [0, 1] if args {2, 7, 11, 15} and 9', () => {
    const actual = twoSum([2, 7, 11, 15], 9);
    const expected: number[] = [0, 1];
    expect(actual).toStrictEqual(expected);
  });
  it('Should return [] if args {9, 9} and 1', () => {
    const actual = twoSum([9, 9], 1);
    const expected: number[] = [];
    expect(actual).toStrictEqual(expected);
  });
});
