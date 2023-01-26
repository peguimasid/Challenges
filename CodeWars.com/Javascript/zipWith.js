/**
 * @param {function} fn
 * @param {number[]} a0
 * @param {number[]} a1
 * @return {number[]}
 */
function zipWith(fn, a0, a1) {
  if (a0.length <= a1.length)
    return a0.map((item, index) => fn(item, a1[index]));
  return a1.map((item, index) => fn(a0[index], item));
}

console.log(zipWith(Math.pow, [10, 10, 10, 10], [0, 1, 2, 3]));
console.log(zipWith(Math.max, [1, 4, 7, 1, 4, 7], [4, 7, 1, 4, 7, 1]));
