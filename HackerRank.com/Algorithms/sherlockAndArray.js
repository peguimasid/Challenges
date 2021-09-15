function balancedSums(array) {
  for (let i = 0; i < array.length; i++) {
    let leftSum = array
      .slice(0, i)
      .reduce((acc, currentVal) => acc + currentVal, 0);
    let rightSum = array
      .slice(i + 1)
      .reduce((acc, currentVal) => acc + currentVal, 0);

    if (leftSum === rightSum) return 'YES';
  }

  return 'NO';
}

console.log(balancedSums([5, 6, 8, 11]));
