function getBombsPos(grid) {
  let result = {};

  for (let i = 0; i < grid.length; i++) {
    result[i] = [];

    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 'O') result[i].push(j);
    }
  }

  return result;
}

function bomberMan(n, grid) {
  grid = grid.map((item) => item.split(''));

  let result = grid;

  while (n) {
    let bombs = getBombsPos(result);
    n--;
    if (!n) return result.map((item) => item.join(''));

    result = grid.map((item) => 'O'.repeat(grid[0].length).split(''));
    n--;
    if (!n) return result.map((item) => item.join(''));

    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (bombs[i].includes(j)) {
          result[i][j] = '.';
          if (result[i - 1]) result[i - 1][j] = '.';
          if (result[i + 1]) result[i + 1][j] = '.';
          if (result[i][j - 1]) result[i][j - 1] = '.';
          if (result[i][j + 1]) result[i][j + 1] = '.';
        }
      }
    }
  }

  return result.map((item) => item.join(''));
}

// let grid = ['...', '.O.', '...'];
let grid = [
  '.......', //
  '...O.O.', //
  '....O..', //
  '..O....', //
  'OO...OO', //
  'OO.O...',
];

console.log(
  JSON.stringify(bomberMan(5, grid)) ===
    JSON.stringify([
      '.......',
      '...O.O.',
      '...OO..',
      '..OOOO.',
      'OOOOOOO',
      'OOOOOOO',
    ])
);

// 1º: Find all bombs positions - add one in seconds and if is more than n, return result
// 2º: Plant bombs in all - add one in seconds and if is more than n, return result
// 3º: Explode all initial bombs - add one in seconds and if is more than n, return result
