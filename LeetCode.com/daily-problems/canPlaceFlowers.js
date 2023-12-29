/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
const canPlaceFlowers = (flowerbed, n) => {
  for (let i = 0; i < flowerbed.length && n !== 0; i++) {
    const curr = flowerbed[i];
    const prev = flowerbed[i - 1];
    const next = flowerbed[i + 1];
    if (curr === 0 && prev !== 1 && next !== 1) {
      n--;
      i++;
    }
  }

  return n === 0;
};

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1)); // true
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2)); // false
console.log(canPlaceFlowers([1, 0, 0, 0, 0, 1], 2)); // false
console.log(canPlaceFlowers([0, 0, 1, 0, 1], 1)); // true
console.log(canPlaceFlowers([1, 0, 0, 0, 1, 0, 0], 2)); // true
