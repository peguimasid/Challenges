function appendAndDelete(s, t, k) {
  let lengthSum = s.length + t.length

  if (k > lengthSum) return 'Yes'

  for (let i = 0; i < Math.min(s.length, t.length); i++) {
    if (s[i] !== t[i]) break
    lengthSum -= 2
  }

  return lengthSum > k || (k - lengthSum) % 2 !== 0 ? 'No' : 'Yes'
}

console.log(appendAndDelete('y', 'yu', 2))