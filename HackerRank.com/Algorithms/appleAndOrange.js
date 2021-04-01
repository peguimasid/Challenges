function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let applesInTheHouse = 0
  let orangesInTheHouse = 0

  for (let apple of apples) {
    if (a + apple >= s && a + apple <= t) applesInTheHouse++
  }

  for (let orange of oranges) {
    if (orange + b <= t && orange + b >= s) orangesInTheHouse++
  }


  console.log(applesInTheHouse)
  console.log(orangesInTheHouse)

  return [applesInTheHouse, orangesInTheHouse]
}

console.log(countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4]))