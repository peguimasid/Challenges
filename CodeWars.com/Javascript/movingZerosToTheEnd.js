/**
 * @param {any[]} arr
 * @return {any[]}
 */
function moveZeros(arr) {
  const zeroCount = arr.filter((elem) => elem === 0).length;
  return arr.filter((elem) => elem !== 0).concat(Array(zeroCount).fill(0));
}

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a']));
