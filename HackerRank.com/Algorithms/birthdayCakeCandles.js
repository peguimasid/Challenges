function birthdayCakeCandles(candles) {
  let result = 0
  let talestCandle = Math.max(...candles)

  for (let candle of candles) {
    if (candle === talestCandle) result++
  }

  return result
}


console.log(birthdayCakeCandles([5, 3, 4, 7, 9, 3]))