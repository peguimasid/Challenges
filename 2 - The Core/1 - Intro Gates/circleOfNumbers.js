function circleOfNumbers(n, firstNumber) {
  let angules = [];
  let initialAngule = 0;
  const threeHundredSixtyDividedByN = 360 / n;

  for(let i = 0; i < n; i++) {
    angules.push(initialAngule);
    initialAngule += threeHundredSixtyDividedByN;
  }

  if(firstNumber == 0) {
    return angules.indexOf(angules[firstNumber] + 180)
  }

  if(angules[firstNumber] === 180) {
    return angules[0]
  }

  if(angules[firstNumber] > 180) {
    return angules.indexOf(angules[firstNumber - 1] - 180) + 1
  }
  
  if(angules[firstNumber] < 180) {
    return angules.indexOf(angules[firstNumber - 1] + 180) + 1
  }

}


console.log(circleOfNumbers(10, 2))