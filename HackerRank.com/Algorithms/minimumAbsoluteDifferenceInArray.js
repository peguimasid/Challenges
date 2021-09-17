function minimumAbsoluteDifference(array) {
  array.sort((a, b) => a - b);

  let result = Infinity;

  for (let i = 0; i < array.length - 1; i++) {
    const curr = array[i];
    const next = array[i + 1];

    if (Math.abs(curr - next) < result) result = Math.abs(curr - next);
  }

  return result;
}

console.log(minimumAbsoluteDifference([3, -7, 0]));
