function candles(candlesNumber, makeNew) {
  let result = candlesNumber
  let leftOvers = candlesNumber
  
  function helper(helperInput) {
    if(helperInput < makeNew) return
    
    const newCandles = Math.floor(helperInput / makeNew)
    result += newCandles

    leftOvers -= newCandles * makeNew
    leftOvers += newCandles

    helper(leftOvers)
  }

  helper(leftOvers)

  return result
}

console.log(candles(15, 5))