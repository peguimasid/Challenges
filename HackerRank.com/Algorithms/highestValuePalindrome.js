function highestValuePalindrome(s, n, k) {
  s = s.split('');
  var changes = new Array(parseInt(n)).fill(0);

  // turning into a palindrome and filling changes array
  for (var i = 0; i < Math.floor(s.length / 2); i++) {
    if (s[i] != s[s.length - 1 - i]) {
      k--;
      s[i] = s[s.length - 1 - i] = Math.max(s[s.length - 1 - i], s[i]);
      changes[i] = 1;
    }
  }
  if (k < 0) {
    return -1;
  }

  // turn leftmost digits to 9 if possible
  for (var i = 0; i < Math.floor(s.length / 2) && k > 0; i++) {
    if (s[i] != 9) {
      if (k >= 2 - changes[i]) {
        k -= 2 - changes[i];
        s[i] = s[s.length - 1 - i] = 9;
      }
    }
  }

  // handle odd length case
  if (s.length % 2 == 1 && k > 0) {
    s[Math.floor(s.length / 2)] = '9';
  }
  return s.join('');
}

console.log(highestValuePalindrome('1231', 5, 3));
