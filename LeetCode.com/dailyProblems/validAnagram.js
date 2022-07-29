/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
  const frequency = s.split('').reduce((acc, curr) => {
    acc[curr] ? acc[curr]++ : (acc[curr] = 1);
    return acc;
  }, {});

  for (const letter of t) {
    if (frequency[letter] === null) return false;
    frequency[letter]--;
  }

  console.log(frequency);

  return Object.values(frequency).every((val) => val === 0);
};

console.log(isAnagram('anagram', 'nagaram'));
console.log(isAnagram('rat', 'car'));
