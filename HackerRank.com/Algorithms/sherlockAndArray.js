function balancedSums(array) {
  let leftSum = 0;
  let rightSum = array.reduce((acc, curr) => acc + curr);

  for (let i = 0; i < array.length; i++) {
    if (array[i - 1]) leftSum += array[i - 1];
    rightSum -= array[i];

    if (leftSum === rightSum) return 'YES';
  }

  return 'NO';
}

console.log(balancedSums([5, 6, 8, 11]));
