function solve(arr) {
  let result = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    if (!result.includes(arr[i])) result.unshift(arr[i]);
  }

  return result;
}

console.log(solve([3, 4, 4, 3, 6, 3]));
