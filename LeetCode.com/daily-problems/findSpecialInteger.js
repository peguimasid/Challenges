/**
 * @param {number[]} arr
 * @return {number}
 */
function findSpecialInteger(arr) {
  const length = arr.length;

  const acc = {};

  for (const num of arr) {
    if (!acc[num]) acc[num] = 0;
    acc[num]++;
    if (acc[num] > length / 4) return num;
  }

  return 0;
}

console.log(findSpecialInteger([1, 2, 2, 6, 6, 6, 6, 7, 10]));

console.log(findSpecialInteger([1, 1]));
