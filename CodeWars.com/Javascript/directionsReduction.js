/**
 * @param {string[]} arr
 */
function dirReduc(arr) {
  const opposite = {
    NORTH: 'SOUTH',
    SOUTH: 'NORTH',
    EAST: 'WEST',
    WEST: 'EAST',
  };

  return arr.reduce((acc, dir) => {
    acc[acc.length - 1] === opposite[dir] ? acc.pop() : acc.push(dir);
    return acc;
  }, []);
}

// prettier-ignore
console.log(dirReduc(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST'])) // ['WEST']
console.log(dirReduc(['NORTH', 'WEST', 'SOUTH', 'EAST'])); // ['NORTH', 'WEST', 'SOUTH', 'EAST']
console.log(dirReduc(['NORTH', 'SOUTH', 'EAST', 'WEST', 'EAST', 'WEST'])); // []
