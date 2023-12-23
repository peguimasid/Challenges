// E ->
// W <-

/**
 * @param {string} path
 * @return {boolean}
 */
function isPathCrossing(path) {
  const visited = ['0,0'];

  let x = 0;
  let y = 0;

  for (const dir of path) {
    if (dir === 'N') y++;
    if (dir === 'S') y--;
    if (dir === 'E') x++;
    if (dir === 'W') x--;
    const key = `${x},${y}`;

    if (visited.includes(key)) {
      return true;
    } else {
      visited.push(key);
    }
  }

  return false;
}

console.log(isPathCrossing('NES')); // false
console.log(isPathCrossing('NESWW')); // true
