/**
 * @param {number} number
 * @return {number}
 */
function sumNumberDigits(number) {
  let result = BigInt(0);

  while (number) {
    result += number % BigInt(10);
    number = number / BigInt(10);
  }

  return result;
}

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
function getLucky(s, k) {
  const sToMappedInt = s
    .split("")
    .map((char) => char.charCodeAt() - 96)
    .join("");
  const strToInt = BigInt(sToMappedInt);

  let result = strToInt;

  for (let i = 0; i < k; i++) {
    result = sumNumberDigits(result);
  }

  return Number(result);
}

console.log(getLucky("iiii", 1)); // 36
console.log(getLucky("leetcode", 2)); // 6
console.log(getLucky("zbax", 2)); // 8
console.log(getLucky("dbvmfhnttvr", 5)); // 5
