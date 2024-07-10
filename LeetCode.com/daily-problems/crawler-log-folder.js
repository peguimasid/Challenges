/**
 * @param {string[]} logs
 * @return {number}
 */
function minOperations(logs) {
  const stack = [];

  for (const log of logs) {
    if (log === "./") continue;
    if (log === "../") {
      stack.pop();
    } else {
      stack.push(1);
    }
  }

  return stack.length;
}

console.log(minOperations(["d1/", "d2/", "../", "d21/", "./"])); // 2
console.log(minOperations(["d1/", "d2/", "./", "d3/", "../", "d31/"])); // 3
console.log(minOperations(["d1/", "../", "../", "../"])); // 0
