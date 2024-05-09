/**
 * @param {string[]} a
 * @param {string[]} b
 */
function diff(a, b) {
  const aSet = a.reduce((acc, curr) => {
    acc.add(curr);
    return acc;
  }, new Set());

  const bSet = b.reduce((acc, curr) => {
    acc.add(curr);
    return acc;
  }, new Set());

  const result = new Set();

  for (const value of a) {
    if (!bSet.has(value)) result.add(value);
  }

  for (const value of b) {
    if (!aSet.has(value)) result.add(value);
  }

  return [...result].sort((a, b) => a.localeCompare(b));
}

console.log(
  diff(['a', 'a', 't', 'e', 'f', 'i', 'j'], ['t', 'g', 'g', 'i', 'k', 'f'])
);
