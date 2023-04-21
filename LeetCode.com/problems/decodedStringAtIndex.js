const isNumber = (s) => !isNaN(s);

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const decodeAtIndex = (s, k) => {
  let size = 0;

  // find the number of char the decoded string is gonna contains
  for (const char of s) {
    size = isNumber(char) ? size * Number(char) : size + 1;
  }

  for (let i = s.length - 1; i >= 0; i--) {
    k = k % size;
    if (k === 0 && !isNumber(s[i])) return s[i];
    size = !isNumber(s[i]) ? size - 1 : Math.ceil(size / Number(s[i]));
  }
};
console.log(decodeAtIndex('leet2code3', 10)); // "leetleetcodeleetleetcodeleetleetcode" => "o"
console.log(decodeAtIndex('ha22', 5)); // "hahahaha" => h
console.log(decodeAtIndex('a2345678999999999999999', 1));
