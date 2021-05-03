function extraLongFactorials(n) {
  let result = BigInt(1)

  while (n > 0) {
    result = result * BigInt(n)
    n--
  }

  console.log(BigInt(result).toString())
  return BigInt(result).toString()
}

console.log(extraLongFactorials(25))