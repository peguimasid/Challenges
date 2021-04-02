function kangaroo(x1, v1, x2, v2) {

  let Kangaroo1 = x1
  let Kangaroo2 = x2

  let i = 0;
  while (i < 10000) {
    if (Kangaroo1 === Kangaroo2) return 'YES'

    Kangaroo1 += v1
    Kangaroo2 += v2
    i++
  }

  return 'NO'
}

// OTHER SOLUTION

function kangaroo(x1, v1, x2, v2) {
  if ((x2 - x1) * (v2 - v1) < 0 && (x2 - x1) % (v2 - v1) === 0) return 'YES'

  return 'NO'
}

console.log(kangaroo(0, 3, 4, 2)) // YES
console.log(kangaroo(0, 2, 5, 3)) // NO