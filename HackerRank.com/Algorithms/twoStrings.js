function twoStrings(s1, s2) {
  for (const char of s1) {
    if (s2.includes(char)) return 'YES';
  }

  return 'NO';
}

console.log(twoStrings('hello', 'world'));
