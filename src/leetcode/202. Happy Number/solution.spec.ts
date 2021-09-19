import { isHappy } from './solution';

describe('202. Happy Number', () => {
  it('Should 19 return true', () => {
    expect(isHappy(19)).toBeTruthy();
  });
  it('Should 2 return false', () => {
    expect(isHappy(2)).toBeFalsy();
  });
});
