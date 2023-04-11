/**
 * @param {string} s
 * @return {string}
 */
const removeStars = (s) => {
  const stack = [];

  for (const char of s) {
    if (char === '*' && stack.length) stack.pop();
    else stack.push(char);
  }

  return stack.join('');
};

console.log(removeStars('leet**cod*e')); // lecoe

// leet**cod*e
// lee*cod*e
// lecod*e
// lecoe
