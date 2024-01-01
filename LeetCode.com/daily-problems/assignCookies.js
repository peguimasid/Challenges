/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
function findContentChildren(g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let i = 0;

  for (let j = 0; i < g.length && j < s.length; j++) {
    if (g[i] <= s[j]) i++;
  }

  return i;
}

console.log(findContentChildren([1, 2, 3], [1, 1])); // 1
console.log(findContentChildren([1, 2], [1, 2, 3])); // 2
console.log(findContentChildren([10, 9, 8, 7, 10, 9, 8, 7], [10, 9, 8, 7])); // 4
console.log(findContentChildren([10, 9, 8, 7], [5, 6, 7, 8])); // 2
