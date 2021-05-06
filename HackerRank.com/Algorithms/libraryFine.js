function libraryFine(d1, m1, y1, d2, m2, y2) {
  if(y2 > y1) return 0

  if(y1 > y2) return 10000

  if(m1 > m2) return 500 * Math.abs(m1 - m2)

  if(m2 > m1) return 0

  if(d1 > d2) return 15 * Math.abs(d1 - d2)

  return 0
}

// 1 - Data que foi devolvido
// 2 - Data que deveria ser devolvido

console.log(libraryFine(2, 7, 1014, 1, 1, 1015))