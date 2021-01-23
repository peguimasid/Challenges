function minimalNumberOfCoins(coins, price) {
  let result = 0
  let moneySpent = 0

  let i = coins.length - 1

  while(i >= 0) {
    if(moneySpent === price) return result
    if(coins[i] + moneySpent > price) i--

    else {
      moneySpent += coins[i]
      result++
    }
  }
  
  return result
}

console.log(minimalNumberOfCoins([1, 2, 10], 28)) // 6