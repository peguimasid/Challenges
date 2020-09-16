function depositProfit(deposit, rate, threshold) {
  let yearCounter = 0;
  let totalAmount = deposit;

  for(let i = 0; totalAmount < threshold; i++) {
    if(totalAmount >= threshold) return yearCounter;

    totalAmount += (totalAmount * (rate / 100))
    yearCounter++;
  }

  return yearCounter;
}

console.log(depositProfit(100, 20, 170));

