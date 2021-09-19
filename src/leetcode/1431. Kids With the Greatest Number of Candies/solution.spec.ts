import { kidsWithCandies } from './solution';

describe('kidsWithCandies', () => {
  it('Should return [true, true, true, false, true]', () => {
    const expected: boolean[] = [true, true, true, false, true];
    const actual = kidsWithCandies([2, 3, 5, 1, 3], 3);
    expect(actual).toStrictEqual(expected);
  });
  it('Should return [true,false,false,false,false]', () => {
    const expected: boolean[] = [true, false, false, false, false];
    const actual = kidsWithCandies([4, 2, 1, 1, 2], 1);
    expect(actual).toStrictEqual(expected);
  });
  it('Should return [true,false,true]', () => {
    const expected: boolean[] = [true, false, true];
    const actual = kidsWithCandies([12, 1, 12], 10);
    expect(actual).toStrictEqual(expected);
  });
});
