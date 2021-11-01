function sansaXor(arr) {
  return arr.length % 2 === 0
    ? 0
    : arr
        .filter((_item, index) => index % 2 === 0)
        .reduce((acc, curr) => acc ^ curr);
}

console.log(sansaXor([4, 5, 6, 7, 8]));
