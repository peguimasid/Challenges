function isLucky(number) {
  number = number.toString();

  let firstHalfSum = 0;
  let secondHalfSum = 0;

  const middle = number.length / 2;

  for(let i = 0; i < number.length; i++) {
    const indexIsBeforeTheMiddle = i < middle;

    if(indexIsBeforeTheMiddle) {
      firstHalfSum += Number(number[i]);
    } else {
      secondHalfSum += Number(number[i]);
    }
  }

  return firstHalfSum == secondHalfSum
}

console.log(isLucky(1331));