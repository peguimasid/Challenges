/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const removeDuplicates = (s, k) => {
  let stack = [];
  let counter = [];

  for (const elem of s) {
    stack[stack.length - 1] === elem
      ? counter[counter.length - 1]++
      : counter.push(1);
    stack.push(elem);
    if (counter[counter.length - 1] === k) {
      stack.splice(stack.length - k, k);
      counter.pop();
    }
  }

  return stack.join('');
};

console.log(removeDuplicates('deeedbbcccbdaa', 3));

// "deeedbbcccbdaa" 3 // remove "eee" and "ccc"
// "ddbbbdaa" 2 // remove "bbb"
// "dddaa" 1 // remove "ddd"
// "aa" 0 // remove nothing
