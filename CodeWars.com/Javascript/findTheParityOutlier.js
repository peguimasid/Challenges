/**
 * @param {number[]} integers
 */
function findOutlier(integers) {
  const even = integers.filter((n) => n % 2 === 0);
  const odd = integers.filter((n) => n % 2);

  return even.length === 1 ? even[0] : odd[0];
}

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));
