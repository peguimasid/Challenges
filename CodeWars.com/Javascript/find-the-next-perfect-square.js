/**
 * @param {number} sq
 * @return {number}
 */
function findNextSquare(sq) {
  const sqrt = Math.sqrt(sq);

  if (sqrt !== Math.floor(sqrt)) return -1;

  return Math.pow(sqrt + 1, 2);
}

console.log(findNextSquare(121)); // 144
console.log(findNextSquare(625)); // 676
console.log(findNextSquare(114)); // -1
