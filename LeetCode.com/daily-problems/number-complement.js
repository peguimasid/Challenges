/**
 * @param {number} num
 * @return {number}
 */
function findComplement(num) {
  return parseInt(
    num
      .toString(2)
      .split("")
      .map((c) => (c === "1" ? "0" : "1"))
      .join(""),
    2
  );
}

console.log(findComplement(5)); // 2
console.log(findComplement(1)); // 0
