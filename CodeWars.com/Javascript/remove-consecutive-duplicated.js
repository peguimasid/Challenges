/**
 * @param {string} string
 * @return {string}
 */
function removeConsecutiveDuplicates(string) {
  return string
    .split(" ")
    .filter((_, i, arr) => arr[i] !== arr?.[i - 1])
    .join(" ");
}

console.log(removeConsecutiveDuplicates("")); // ""
console.log(removeConsecutiveDuplicates("alpha")); // "alpha"
console.log(
  removeConsecutiveDuplicates(
    "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
  )
); // alpha beta gamma delta alpha beta gamma delta"
console.log(removeConsecutiveDuplicates("alpha alpha alpha alpha")); // "alpha"
