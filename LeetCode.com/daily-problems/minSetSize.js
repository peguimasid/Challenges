/**
 * @param {number[]} arr
 * @return {number}
 */
const minSetSize = (arr) => {
  const frequency = Array.from(
    arr
      .reduce((acc, curr) => {
        acc.has(curr) ? acc.set(curr, acc.get(curr) + 1) : acc.set(curr, 1);
        return acc;
      }, new Map())
      .entries()
  ).sort((a, b) => b[1] - a[1]);

  let exclude = [];
  let exclude_count = 0;

  for (let i = 0; i < frequency.length; i++) {
    exclude_count += frequency[i][1];
    exclude.push(frequency[i][0]);
    if (exclude_count >= arr.length / 2) break;
  }

  return exclude.length;
};

console.log(minSetSize([3, 3, 3, 3, 5, 5, 5, 2, 2, 7]));
console.log(minSetSize([7, 7, 7, 7, 7, 7]));
