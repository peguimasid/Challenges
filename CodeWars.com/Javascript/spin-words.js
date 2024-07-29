/**
 * @param {string} string
 * @return {string}
 */
function spinWords(string) {
  return string
    .split(" ")
    .map((word) => {
      if (word.length >= 5) {
        return word.split("").reverse().join("");
      }
      return word;
    })
    .join(" ");
}

console.log(spinWords("Hey fellow warriors")); // "Hey wollef sroirraw"
console.log(spinWords("This is a test")); // "This is a test"
console.log(spinWords("This is another test")); //"This is rehtona test"
