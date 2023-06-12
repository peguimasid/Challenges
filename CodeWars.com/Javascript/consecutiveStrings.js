/**
 * @param {string[]} strarr
 * @param {number} k
 * @return {string}
 */
const longestConsec = (strarr, k) => {
  if (k < 0) return '';
  let result = '';

  for (let i = 0; i < strarr.length - k + 1; i++) {
    const join = strarr.slice(i, i + k).join('');
    if (join.length > result.length) result = join;
  }

  return result;
};

// prettier-ignore
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2), "abigailtheta")
// prettier-ignore
console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1), "oocccffuucccjjjkkkjyyyeehh")
// prettier-ignore
console.log(longestConsec([], 3), "")
// prettier-ignore
console.log(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2), "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck")
// prettier-ignore
console.log(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2), "wlwsasphmxxowiaxujylentrklctozmymu")
// prettier-ignore
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2), "")
// prettier-ignore
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3), "ixoyx3452zzzzzzzzzzzz")
// prettier-ignore
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15), "")
// prettier-ignore
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0), "")
