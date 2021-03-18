function isEvenNumber(number) {
  return number % 2 === 0
}

function appleBoxes(k) {
  let result = 0
  let yellowApplesCounter = 0;
  let redApplesCounter = 0;

  for(let i = 1; i <= k; i++) {
    if(isEvenNumber(i)) {
      redApplesCounter = redApplesCounter + (i * i)
    } else {
      yellowApplesCounter = yellowApplesCounter + (i * i)
    }
  }

  result = redApplesCounter -  yellowApplesCounter

  return result
}

console.log(appleBoxes(5))