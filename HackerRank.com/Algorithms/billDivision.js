function bonAppetit(bill, k, b) {
  const annaShouldPay = bill.reduce((acc, curr, index) => {
    return index === k ? acc + 0 : acc + curr
  }) / 2

  const annaPayed = b

  return annaPayed - annaShouldPay === 0 ? 'Bon Appetit' : annaPayed - annaShouldPay
}

console.log(bonAppetit([3, 10, 2, 9], 1, 14))