function sherlockAndAnagrams(string) {
  let result = [];
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j < string.length + 1; j++) {
      result.push(string.slice(i, j).split('').sort().join(''));
    }
  }

  for (let i = 0; i < result.length - 1; i++) {
    for (let j = i + 1; j < result.length; j++) {
      if (result[i] === result[j]) count++;
    }
  }

  return count;
}

console.log(sherlockAndAnagrams('abba')); // 4
// console.log(sherlockAndAnagrams('abcd')) // 0

// [a, a]
// [ab, ab]
// [abb, abb]
// [b, b]
