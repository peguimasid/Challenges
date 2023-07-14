/**
 * @param {string} maze
 */
function pathFinder(maze) {
  const mazeSplitted = maze.split('\n').map((row) => row.trim().split(''));

  const queue = [[0, 0]];
  const visited = new Set(['0,0']);

  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  while (queue.length > 0) {
    const [x, y] = queue.shift();

    const n = mazeSplitted.length - 1;
    const m = mazeSplitted[0].length - 1;

    if (x === n && y === m) return true;

    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;
      const key = `${nx},${ny}`;

      const exists = nx >= 0 && ny >= 0 && nx <= n && ny <= m;

      if (exists && mazeSplitted[nx][ny] !== 'W' && !visited.has(key)) {
        queue.push([nx, ny]);
        visited.add(key);
      }
    }
  }

  return false;
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
