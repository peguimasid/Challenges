function pickingNumbers(a) {
  const result = []

  for (let i = 0; i < a.length; i++) {
    let actual = []

    const actualNum = a[i];

    for (let j = 0; j < a.length; j++) {
      const nextNum = a[j];

      if (Math.abs(actualNum - nextNum) <= 1 && actual.every(num => Math.abs(num - nextNum) <= 1)) actual.push(nextNum)
    }

    result.push(actual)
  }

  console.log(result)

  return Math.max(...result.map(arr => arr.length))
}

console.log(pickingNumbers([1, 2, 2, 3, 1, 2]))