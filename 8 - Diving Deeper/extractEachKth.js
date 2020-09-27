function extractEachKth(array, k) {
  let K_ValueIncremented = k - 1;
  let bannedIndexes = [];
  let result = [];

  for(let i = 0; i < array.length; i++) {
    if(K_ValueIncremented > array.length) break;
    bannedIndexes.push(K_ValueIncremented);
    K_ValueIncremented += k
  }

  for(let i = 0; i < array.length; i++) {
    if(bannedIndexes.indexOf(i) === -1) {
      result.push(array[i]);
    }
  }

  return result;
}

console.log(extractEachKth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3))