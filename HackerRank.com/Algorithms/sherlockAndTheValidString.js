function isValid(s) {
  if (s.length < 3) {
    return 'YES';
  }
  const charCounts = {};
  for (let i = 0; i < s.length; i++) {
    charCounts[s[i]] = charCounts[s[i]] ? charCounts[s[i]] + 1 : 1;
  }

  const counts = Object.values(charCounts);
  const desiredCount = getDesiredCount(counts);
  if (!desiredCount) {
    return 'NO';
  }
  let modificationsLeft = 1;
  for (let i = 0; i < counts.length; i++) {
    if (counts[i] !== desiredCount) {
      if (modificationsLeft === 0) {
        return 'NO';
      } else if (counts[i] === 1) {
        modificationsLeft--;
      } else if (counts[i] - 1 === desiredCount) {
        modificationsLeft--;
      } else {
        return 'NO';
      }
    }
  }
  return 'YES';
}

function getDesiredCount(counts) {
  if (counts[0] === counts[1]) {
    return counts[0];
  }
  if (counts[1] === counts[2]) {
    return counts[1];
  }
  if (counts[0] === counts[3]) {
    return counts[0];
  }
  return null;
}

console.log(isValid('abc')); // YES
console.log(isValid('abccc')); // NO
console.log(isValid('aabbcd')); // NO
