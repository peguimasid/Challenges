function save(sizes, hd) {
  let result = 0;
  let savedSize = 0;

  let i = 0;

  while (savedSize + sizes[i] <= hd) {
    savedSize += sizes[i];
    result++;
    i++;
  }

  return result;
}

console.log(save([1, 2, 3, 4], 250)); // 4
console.log(save([100], 500)); // 1
