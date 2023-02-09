const swapFirstLetter = (ideas, i, j) => {
  const temp = ideas[i][0];
  ideas[i] = ideas[j][0] + ideas[i].slice(1);
  ideas[j] = temp + ideas[j].slice(1);

  return [ideas[i], ideas[j]];
};

/**
 * @param {string[]} ideas
 * @return {number}
 */
const distinctNames = (ideas) => {
  let result = 0;

  for (let i = 0; i < ideas.length; i++) {
    for (let j = 0; j < ideas.length; j++) {
      const [first, second] = swapFirstLetter([...ideas], i, j);

      if (!ideas.includes(first) && !ideas.includes(second)) {
        result++;
      }
    }
  }

  return result;
};

console.log(distinctNames(['coffee', 'donuts', 'time', 'toffee']));
console.log(distinctNames(['lack', 'back']));
