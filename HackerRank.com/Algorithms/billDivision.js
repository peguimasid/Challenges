function bonAppetit(bill, k, b) {
  const annaShoudPay = bill.reduce((acc, curr, index) => {
    return index === k ? acc + 0 : acc + curr
  }) / 2

  const annaPayed = b

  return annaPayed - annaShoudPay === 0 ? 'Bon Appetit' : annaPayed - annaShoudPay
}

console.log(bonAppetit([3, 10, 2, 9], 1, 7))