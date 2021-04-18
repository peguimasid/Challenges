function hurdleRace(k, height) {

  return Math.max(...height) - k > 0 ? Math.max(...height) - k : 0
}

console.log(hurdleRace(4, [1, 6, 3, 5, 2]))