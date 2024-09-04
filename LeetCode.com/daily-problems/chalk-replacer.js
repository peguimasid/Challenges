/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
function chalkReplacer(chalk, k) {
  const sumOfChalk = chalk.reduce((acc, curr) => acc + curr, 0);

  let remainingChalk = k % sumOfChalk;

  for (let i = 0; i < chalk.length; i++) {
    if (remainingChalk < chalk[i]) {
      return i;
    }
    remainingChalk -= chalk[i];
  }
}

console.log(chalkReplacer([5, 1, 5], 22)); // 0
console.log(chalkReplacer([3, 4, 1, 2], 25)); // 1
