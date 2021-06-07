function cavityMap(grid) {
  let result = [];

  for (let i = 0; i < grid.length; i++) {
    const string = grid[i];
    const stringTop = grid[i - 1];
    const stringDown = grid[i + 1];
    let s = "";

    for (let j = 0; j < string.length; j++) {
      const left = Number(string[j - 1]);
      const curr = Number(string[j]);
      const right = Number(string[j + 1]);

      const top = stringTop ? Number(stringTop[j]) : null;
      const down = stringDown ? Number(stringDown[j]) : null;

      if (
        left &&
        right &&
        top &&
        down &&
        [left, right, top, down].every((x) => x < curr)
      ) {
        s += "X";
      } else {
        s += curr;
      }
    }

    result.push(s);
  }

  return result;
}

console.log(cavityMap(["17323", "83521", "68656", "44424", "98855"]));
