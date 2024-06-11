/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
function relativeSortArray(arr1, arr2) {
  const count = arr1.reduce((acc, curr) => {
    acc[curr]++;
    return acc;
  }, Array(1001).fill(0));

  const valuesSorted = arr2.reduce((acc, curr) => {
    while (count[curr] > 0) {
      acc.push(curr);
      count[curr]--;
    }
    return acc;
  }, []);

  const rest = count.reduce((acc, _curr, i) => {
    while (count[i] > 0) {
      acc.push(i);
      count[i]--;
    }
    return acc;
  }, []);

  return [...valuesSorted, ...rest];
}

// prettier-ignore
console.log(relativeSortArray([2,3,1,3,2,4,6,7,9,2,19], [2,1,4,3,9,6]))
// [2,2,2,1,4,3,3,9,6,7,19]

// prettier-ignore
// console.log(relativeSortArray([28,6,22,8,44,17], [22,28,8,6]))
// [22,28,8,6,17,44]
