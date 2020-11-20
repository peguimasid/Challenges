function isBeautifulString(string) {
  s = "abcdefghijklmnopqrstuvwxyz";

  for (i = 1; i < s.length; i++) {
    if (string.split(s[i]).length-1 > string.split(s[i-1]).length-1) {
    return false
  }
}

  return true;
}

console.log(isBeautifulString('bbbaacdafe'))