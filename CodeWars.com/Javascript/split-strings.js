/**
 * @param {string} str
 * @return {string[]}
 */
function solution(str) {
  const result = [];

  for (let i = 0; i < str.length; i += 2) {
    result.push(str[i].concat(str?.[i + 1] ?? "_"));
  }

  return result;
}

console.log(solution("abcdef")); // ["ab", "cd", "ef"]
console.log(solution("abcdefg")); // ["ab", "cd", "ef", "g_"]
// console.log(solution("")); // []
