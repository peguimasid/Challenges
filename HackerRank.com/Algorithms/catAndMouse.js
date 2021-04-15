function catAndMouse(x, y, z) {
  if (Math.abs(x - z) === Math.abs(y - z)) return 'Mouse C'

  return Math.abs(x - z) > Math.abs(y - z) ? 'Cat B' : 'Cat A'
}

console.log(catAndMouse(1, 3, 2))