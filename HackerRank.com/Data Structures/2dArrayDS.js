function hourglassSum(arr) {
  let result = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < 4; i++) {
    const line = arr[i];
    const nextLine = arr[i + 1];
    const afterNextLine = arr[i + 2];

    for (let j = 1; j < 5; j++) {
      const curr = line[j];
      const left = line[j - 1];
      const right = line[j + 1];
      const down = nextLine[j];
      const downDownCurr = afterNextLine[j];
      const downDownLeft = afterNextLine[j - 1];
      const downDownRight = afterNextLine[j + 1];

      let sum =
        curr +
        left +
        right +
        down +
        downDownCurr +
        downDownLeft +
        downDownRight;

      if (sum > result) result = sum;
    }
  }

  return result;
}

console.log(
  hourglassSum([
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0],
  ])
);
