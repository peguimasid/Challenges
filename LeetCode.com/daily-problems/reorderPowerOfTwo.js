const stringPermutations = (str) => {
  if (str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str];
  return str
    .split('')
    .reduce(
      (acc, letter, i) =>
        acc.concat(
          stringPermutations(str.slice(0, i) + str.slice(i + 1)).map(
            (val) => letter + val
          )
        ),
      []
    );
};

/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfTwo = (n) => {
  for (let i = 1; i <= n; i *= 2) {
    if (i === n) return true;
  }

  return false;
};

/**
 * @param {number} n
 * @return {boolean}
 */
const reorderedPowerOf2 = (n) => {
  const possible = stringPermutations(String(n))
    .filter((str) => str[0] !== '0')
    .map((str) => Number(str));

  return possible.some((n) => isPowerOfTwo(n));
};

console.log(reorderedPowerOf2(4054));
