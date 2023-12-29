/**
 * @param {string} s
 * @return {number}
 */
function minOperations(s) {
  const len = Math.ceil(s.length / 2);

  const one = '10'.repeat(len).slice(0, s.length);
  const two = '01'.repeat(len).slice(0, s.length);

  let diffOne = 0;
  let diffTwo = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== one[i]) diffOne++;
    if (s[i] !== two[i]) diffTwo++;
  }

  return Math.min(diffOne, diffTwo);
}

console.log(minOperations('0100')); // 1
console.log(minOperations('10')); // 0
console.log(minOperations('1111')); // 2
console.log(minOperations('10010100')); // 3
