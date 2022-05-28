/**
 * @param {number} num
 * @return {number}
 */
const numberOfSteps = (num) => {
  let result = 1;

  const helper = (num) => {
    if (num === 1) return;
    helper(num % 2 ? num - 1 : num / 2);
    result++;
  };

  helper(num);

  return result;
};

console.log(numberOfSteps(14));
