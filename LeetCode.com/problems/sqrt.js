/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = (x) => {
  let result = 0;
  let sqrt = 1;

  while (sqrt * sqrt <= x) {
    result = sqrt;
    sqrt++;
  }

  return result;
};

console.log(mySqrt(4)); // 2
console.log(mySqrt(8)); // 2.8254 => floor it => 2
