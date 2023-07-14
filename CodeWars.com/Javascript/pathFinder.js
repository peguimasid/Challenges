/**
 * @param {string} maze
 */
function pathFinder(maze) {
  const mazeSplitted = maze.split('\n').map((row) => row.trim().split(''));

  const visited = [];

  const traverse = (x, y) => {
    if (!mazeSplitted?.[x]?.[y] || mazeSplitted[x][y] === 'W') return false;

    const key = `${x},${y}`;

    if (visited.includes(key)) return false;

    visited.push(key);

    if (x === mazeSplitted.length - 1 && y === mazeSplitted[0].length - 1) {
      return true;
    }

    return (
      traverse(x - 1, y) ||
      traverse(x + 1, y) ||
      traverse(x, y - 1) ||
      traverse(x, y + 1)
    );
  };

  return traverse(0, 0);
}

console.log(
  pathFinder(
    `.W.
   .W.
   ...`
  )
); // true

console.log(
  pathFinder(
    `.W.
   .W.
   W..`
  )
); // false

console.log(
  pathFinder(
    `......
   ......
   ......
   ......
   ......
   ......`
  )
); // true

console.log(
  pathFinder(
    `......
   ......
   ......
   ......
   .....W
   ....W.`
  )
); // false
