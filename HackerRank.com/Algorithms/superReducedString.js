function findCommonChars(s) {
  let result = [];

  for (let i = 0; i < s.length; i++) {
    let commonChars = '';

    let j = i;

    while (s[j] === s[i]) {
      commonChars += s[j];
      j++;
    }

    i = j - 1;

    result.push(commonChars);
  }

  return result;
}

function superReducedString(s) {
  const commonChars = findCommonChars(s);

  let result = [];

  for (let chars of commonChars) {
    result.push(chars[0].repeat(chars.length % 2));
  }

  if (findCommonChars(result.join('')).some((item) => item.length > 1)) {
    return superReducedString(result.join(''));
  }

  return result.join('').length ? result.join('') : 'Empty String';
}

console.log(superReducedString('baab'));
