/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
function chalkReplacer(chalk, k) {
  let i = 0;
  while (true) {
    if (k < chalk[i]) return i;
    k -= chalk[i];
    i = (i + 1) % chalk.length;
  }
}

console.log(chalkReplacer([5, 1, 5], 22)); // 0
console.log(chalkReplacer([3, 4, 1, 2], 25)); // 1
