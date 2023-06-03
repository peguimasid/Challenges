/**
 * @param {number[]} integers
 */
function findOutlier(integers) {
  const frequency = integers.reduce(
    (acc, curr) => {
      if (Math.abs(curr) % 2 === 0) acc.even.push(curr);
      if (Math.abs(curr) % 2 === 1) acc.odd.push(curr);
      return acc;
    },
    { even: [], odd: [] }
  );

  console.log(frequency);

  const { even, odd } = frequency;
  return even.length > odd.length ? odd[0] : even[0];
}

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));
