/**
 * @param {function} fn
 * @param {number[]} a0
 * @param {number[]} a1
 * @return {number[]}
 */
function zipWith(fn, a0, a1) {
  return Array(Math.min(a0.length, a1.length))
    .fill()
    .map((_, i) => fn(a0[i], a1[i]));
}

console.log(zipWith(Math.pow, [10, 10, 10, 10], [0, 1, 2, 3]));
console.log(zipWith(Math.max, [1, 4, 7, 1, 4, 7], [4, 7, 1, 4, 7, 1]));
