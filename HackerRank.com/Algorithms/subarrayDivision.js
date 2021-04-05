function birthday(s, d, m) {
  let result = 0

  for (let i = 0; i < s.length; i++) {
    const square = s[i];
    let segment = []

    for (let j = i; j < m + i; j++) segment.push(s[j])

    if (segment.reduce((acc, curr) => acc + curr) === d) result++
  }

  return result
}

console.log(birthday([2, 2, 1, 3, 2], 4, 2))