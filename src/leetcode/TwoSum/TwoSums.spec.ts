import { twoSum } from './TwoSums';

describe('TwoSums', () => {
    it('Should return [0, 1] if args {2, 7, 11, 15} and 9', () => {
        const actual = twoSum([2, 7, 11, 15], 9);
        const expected: number[] = [0, 1];
        expect(actual).toStrictEqual(expected);
    });
});
