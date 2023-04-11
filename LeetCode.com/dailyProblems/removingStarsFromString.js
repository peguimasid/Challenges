/**
 * @param {string} s
 * @return {string}
 */
const removeStars = (s) => {
  return s
    .split('')
    .reduce((acc, curr) => {
      curr === '*' ? acc.pop() : acc.push(curr);
      return acc;
    }, [])
    .join('');
};

console.log(removeStars('leet**cod*e')); // lecoe

// leet**cod*e
// lee*cod*e
// lecod*e
// lecoe
