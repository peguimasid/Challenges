/**
 * @param {string[]} array
 * @return {string}
 */
function findMissingLetter(array) {
  const charCodes = array.map((char) => char.charCodeAt());

  const startLetter = Math.min(...charCodes);
  const endLetter = Math.max(...charCodes);

  for (let i = startLetter; i <= endLetter; i++) {
    if (!charCodes.includes(i)) return String.fromCharCode(i);
  }

  return -1;
}

console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f'])); // 'e'
console.log(findMissingLetter(['O', 'Q', 'R', 'S'])); // 'P'
