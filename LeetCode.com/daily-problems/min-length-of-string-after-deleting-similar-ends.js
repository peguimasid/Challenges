/**
 * @param {string} s
 * @return {number}
 */
function minimumLength(s) {
  let start = 0;
  let end = s.length - 1;

  while (start < end && s[start] === s[end]) {
    const char = s[start];
    while (start <= end && s[start] === char) start++;
    while (end >= start && s[end] === char) end--;
  }

  return end - start + 1;
}

console.log(minimumLength('ca')); // 2 => None can be removed
console.log(minimumLength('cabaabac')); // 0 => Can remove all
console.log(minimumLength('aabccabba')); // 3
