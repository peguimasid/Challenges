/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = (ransomNote, magazine) => {
  const digitsAmount = magazine.split('').reduce((acc, curr) => {
    acc[curr] = acc[curr] + 1 || 1;
    return acc;
  }, {});

  for (let i = 0; i < ransomNote.length; i++) {
    if (!digitsAmount[ransomNote[i]]) return false;
    digitsAmount[ransomNote[i]]--;
  }

  return true;
};

console.log(canConstruct('aa', 'a'));
