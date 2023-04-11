/**
 * @param {string} s
 * @return {string}
 */
const removeStars = (s) => {
  let result = s;

  let index = result.indexOf('*');
  while (index >= 0) {
    result = result.slice(0, index - 1) + result.slice(index + 1);
    index = result.indexOf('*');
  }

  return result;
};

console.log(removeStars('leet**cod*e')); // lecoe

// leet**cod*e
// lee*cod*e
// lecod*e
// lecoe
