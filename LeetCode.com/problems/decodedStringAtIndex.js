/**
 * @param {string} s
 * @return {string}
 */
const decodeString = (s) => {
  let aux = s;

  let i = 0;
  while (i < aux.length) {
    if (/^[0-9]$/.test(aux[i])) {
      aux = aux.slice(0, i).repeat(Number(aux[i])) + aux.slice(i + 1);
      i = 0;
    }
    i++;
  }

  return aux;
};

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const decodeAtIndex = (s, k) => {
  if (k === 1) return s[0];
  const decodedString = decodeString(s);
  return decodedString[k - 1];
};
console.log(decodeAtIndex('leet2code3', 10)); // "leetleetcodeleetleetcodeleetleetcode" => "o"
console.log(decodeAtIndex('ha22', 5)); // "hahahaha" => h
console.log(decodeAtIndex('a2345678999999999999999', 1));
