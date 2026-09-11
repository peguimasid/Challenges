/**
 * @param {string[] | number[]} arr
 * @return {Map<number, number>}
 */
function countFrequency(arr) {
  return arr.reduce((acc, curr) => {
    const num = typeof curr === "string" ? Number.parseInt(curr, 10) : curr;
    acc.set(num, (acc.get(num) || 0) + 1);
    return acc;
  }, new Map());
}

/**
 * @param {number[]} digits
 * @return {number}
 */
function totalNumbers(digits) {
  let result = 0;

  const digitsFrequency = countFrequency(digits);

  for (let i = 100; i <= 999; i++) {
    if (i % 2 !== 0) continue;

    const numFrequency = countFrequency(String(i).split(""));
    const canForm = [...numFrequency].every(([digit, frequency]) => {
      return frequency <= digitsFrequency.get(digit);
    });

    if (canForm) result++;
  }

  return result;
}

console.log(totalNumbers([1, 2, 3, 4])); // 12
// The 12 distinct 3-digit even numbers that can be formed are
// 124, 132, 134, 142, 214, 234, 312, 314, 324, 342, 412, and 432.
// Note that 222 cannot be formed because there is only 1 copy of the digit 2.

console.log(totalNumbers([0, 2, 2])); // 2
console.log(totalNumbers([6, 6, 6])); // 1
console.log(totalNumbers([1, 3, 5])); // 0
