/**
 * @param {number[]} deck
 * @return {boolean}
 */
const hasGroupsSizeX = (deck) => {
  const frequency = deck.reduce((acc, curr) => {
    if (!acc[curr]) acc[curr] = 0;
    acc[curr]++;
    return acc;
  }, {});

  const values = Object.values(frequency);

  const gcd = (x, y) => (y === 0 ? x : gcd(y, x % y));

  return values.reduce(gcd) > 1;
};

console.log(hasGroupsSizeX([1, 2, 3, 4, 4, 3, 2, 1])); // true
console.log(hasGroupsSizeX([1, 1, 1, 2, 2, 2, 3, 3])); // false
console.log(hasGroupsSizeX([1, 1, 2, 2, 2, 2])); // true
console.log(hasGroupsSizeX([0, 0, 0, 1, 1, 1, 2, 2, 2])); // true
console.log(hasGroupsSizeX([1])); // false
console.log(hasGroupsSizeX([0, 0, 0, 1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3])); // true
console.log(hasGroupsSizeX([1, 1, 1, 1, 2, 2, 2, 2, 2, 2])); // true
