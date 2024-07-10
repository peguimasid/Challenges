/**
 * @param {string[]} logs
 * @return {number}
 */
function minOperations(logs) {
  let count = 0;

  for (const log of logs) {
    if (log === "./") continue;
    if (log === "../") count = Math.max(count - 1, 0);
    else count++;
  }

  return count;
}

console.log(minOperations(["d1/", "d2/", "../", "d21/", "./"])); // 2
console.log(minOperations(["d1/", "d2/", "./", "d3/", "../", "d31/"])); // 3
console.log(minOperations(["d1/", "../", "../", "../"])); // 0
