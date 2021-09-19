export const reverse = (x: number): number => {
  const minimum = -2147483648;
  const maximum = 2147483647;

  if (x === 0) {
    return 0;
  }

  const result =
    Math.sign(x) * parseInt(x.toString().split('').reverse().join(''));
  if (result < minimum || result > maximum) {
    return 0;
  }

  return result;
};
