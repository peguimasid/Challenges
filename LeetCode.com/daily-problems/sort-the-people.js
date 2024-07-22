/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
function sortPeople(names, heights) {
  return new Array(names.length)
    .fill(null)
    .map((_, i) => [names[i], heights[i]])
    .toSorted((a, b) => b[1] - a[1])
    .map(([name]) => name);
}

console.log(sortPeople(["Mary", "John", "Emma"], [180, 165, 170])); // ["Mary","Emma","John"]
console.log(sortPeople(["Alice", "Bob", "Bob"], [155, 185, 150])); // ["Bob","Alice","Bob"]
