function getMoneySpent(keyboards, drives, b) {
  let result = -1

  for (let i = 0; i < keyboards.length; i++) {
    const keyboardPrice = keyboards[i];
    for (let j = 0; j < drives.length; j++) {
      const drivePrice = drives[j];

      if (keyboardPrice + drivePrice > result && keyboardPrice + drivePrice <= b) {
        result = keyboardPrice + drivePrice
      }
    }
  }

  return result
}

console.log(getMoneySpent([40, 50, 60], [5, 8, 12], 60))