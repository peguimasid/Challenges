function viralAdvertising(n) {
  let result = 0

  let peopleShared = 5

  for (let day = 1; day <= n; day++) {
    let liked = Math.floor(peopleShared / 2)

    result += liked

    peopleShared = liked * 3
  }

  return result
}

console.log(viralAdvertising(3))