function gamingArray(arr) {
  if (arr.length === 1) return 'BOB';

  let result = 1;

  let maxVal = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxVal) {
      maxVal = arr[i];
      result++;
    }
  }

  return result % 2 === 0 ? 'ANDY' : 'BOB';
}

console.log(gamingArray([2, 3, 5, 4, 1]));
