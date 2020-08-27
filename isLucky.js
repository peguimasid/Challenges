function isLucky(number) {
  number = number.toString();

  let firstPart = 0;
  let secondPart = 0;

  const middle = number.length / 2;

  for(let i = 0; i < number.length; i++) {
    const indexIsBeforeTheMiddle = i < middle;

    if(indexIsBeforeTheMiddle) {
      firstPart += Number(number[i]);
    } else {
      secondPart += Number(number[i]);
    }
  }

  return firstPart == secondPart 
}

console.log(isLucky(1230));