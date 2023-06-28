/**
 * @param {number[]} array
 * @param {number} k
 * @return {number[][]}
 */
const generateSubArrays = (array, k) => {
  if (array.length < k) return [];
  const result = [];

  const backtrack = (startIndex, currentSubarray) => {
    if (currentSubarray.length === k) return result.push([...currentSubarray]);

    for (let i = startIndex; i < array.length; i++) {
      currentSubarray.push(array[i]);
      backtrack(i + 1, currentSubarray);
      currentSubarray.pop();
    }
  };

  backtrack(0, []);

  return result;
};

/**
 * @param {number} t
 * @param {number} k
 * @param {number[]} ls
 * @return {number}
 */
const chooseBestSum = (t, k, ls) => {
  if (ls.length < k) return null;

  let result = null;

  const orderedSubArrays = generateSubArrays(ls, k);
  const subArraySums = orderedSubArrays.map((array) =>
    array.reduce((acc, curr) => acc + curr)
  );

  for (const sum of subArraySums) {
    if (sum <= t) result = Math.max(result, sum);
  }

  return result;
};

// prettier-ignore
console.log(chooseBestSum(163, 3, [50, 55, 56, 57, 58])) //  163
// prettier-ignore
console.log(chooseBestSum(163, 3, [50])) //  null
// prettier-ignore
console.log(chooseBestSum(230, 3, [91, 74, 73, 85, 73, 81, 87])) //  228
