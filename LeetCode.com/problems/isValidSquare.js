/**
 * @param {number} num
 * @return {boolean}
 */
const isPerfectSquare = (num) => {
  let i = 1;
  while (true) {
    const pow = i * i;
    if (pow === num) return true;
    if (pow > num) return false;
    i++;
  }
};

console.log(isPerfectSquare(16));
