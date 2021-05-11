function repeatedString(s, n) {
  let c = 0;
  let ca = 0;
  let r = n % s.length;

  for (let i = s.length; i-- > 0; ) {
    if (s.charAt(i) === 'a') {
      ++c;
      if (i < r) {
        ++ca;
      }
    }
  }

  return ((n - r) / s.length) * c + ca;
}

console.log(repeatedString('aaaaaaaaaaaaaaaaa', 328372983));
