import { reverse } from './ReverseInteger';

describe('ReverseInteger', () => {
  it('Should return 321', () => {
    const actual = reverse(123);
    const expected = 321;
    expect(actual).toStrictEqual(expected);
  });
  it('Should return 0 if max positive', () => {
    const actual = reverse(1534236469);
    const expected = 0;
    expect(actual).toStrictEqual(expected);
  });
  it('Should return 0 if max negative', () => {
    const actual = reverse(-1563847412);
    const expected = 0;
    expect(actual).toStrictEqual(expected);
  });
  it('Should return 0 if 0', () => {
    const actual = reverse(0);
    const expected = 0;
    expect(actual).toStrictEqual(expected);
  });
});
