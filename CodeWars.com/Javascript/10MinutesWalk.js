/**
 * @param {string[]} walk
 * @return {boolean}
 */
function isValidWalk(walk) {
  if (walk.length !== 10) return false;

  const freq = walk.reduce(
    (acc, curr) => {
      acc[curr]++;
      return acc;
    },
    { n: 0, s: 0, w: 0, e: 0 }
  );

  return freq['n'] === freq['s'] && freq['e'] === freq['w'];
}

console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])); //  true
// prettier-ignore
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e'])) //  false
console.log(isValidWalk(['w'])); //  false
console.log(isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])); //  false
