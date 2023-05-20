/**
 * @param {any[]} arr
 * @return {any[]}
 */
function moveZeros(arr) {
  return arr
    .filter((elem) => elem !== 0)
    .concat(arr.filter((elem) => elem === 0));
}

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a']));
