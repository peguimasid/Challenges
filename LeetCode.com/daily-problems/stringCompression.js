/**
 * @param {character[]} chars
 * @return {number}
 */
const compress = (chars) => {
  const frequency = chars.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});

  return Object.entries(frequency)
    .map(([char, freq]) => (freq === 1 ? [char] : [char, freq]))
    .flat()
    .map((item) => String(item))
    .join('')
    .split('');
};

// ["a","2","b","2","c","3"]
console.log(compress(['a', 'a', 'b', 'b', 'c', 'c', 'c']));

// "a","b","1","2"]
console.log(
  compress(['a', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'])
);
