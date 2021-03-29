function plusMinus(arr) {
  let positives = 0
  let negatives = 0
  let zeros = 0

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i]
    if (num > 0) positives++
    if (num < 0) negatives++
    if (num === 0) zeros++
  }

  [positives, negatives, zeros].map(item => console.log((item / arr.length).toFixed(6)))
}

console.log(plusMinus([-4, 3, - 9, 0, 4, 1]))