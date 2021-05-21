function kaprekarNumbers(p, q) {
  let result = []

  for (let i = p; i <= q; i++) {
    let pow = Math.pow(i, 2).toString()
    let middle = Math.floor(pow.length / 2)

    let left = pow.substr(0, middle)
    let right = pow.substr(middle)


    if(Number(left) + Number(right) === i) result.push(i)
  }

    if(result.length) {
        console.log(...result)
    } else {
        console.log('INVALID RANGE')
    }
  return result.length ? result : 'INVALID RANGE'
}

console.log(kaprekarNumbers(1, 100))