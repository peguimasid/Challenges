function maximumToys(prices, budget) {
  let result = 0;

  // sort by price (lest expensive to more expensive)
  // why do thay?? if he want maximum num of toys, we get most cheap toys first
  prices.sort((a, b) => a - b);

  // create an variable to store what we spend so far
  let spendSoFar = 0;

  // for each toy
  for (let i = 0; i < prices.length; i++) {
    const currentToyPrice = prices[i];
    // if what we spend so far is the budget we have, return result
    if (spendSoFar === budget) return result;

    // if the curent toy price + what we spend so far is less than or equal to budget,
    // add this toy to our bag(result) and sum his value to spend so far variable
    if (currentToyPrice + spendSoFar <= budget) {
      spendSoFar += currentToyPrice;
      result++;
    }
  }

  // if for some reason the budget is not hit in for loop, return him at the end
  return result;
}

console.log(maximumToys([1, 2, 3, 4], 7));
console.log(maximumToys([1, 12, 5, 111, 220, 1000, 10], 50));
