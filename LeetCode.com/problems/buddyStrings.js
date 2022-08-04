/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
const buddyStrings = (s, goal) => {
  if (s.length !== goal.length) return false;

  const diff = getDiff(s, goal);

  console.log(diff);

  if (diff.length === 1 || diff.lenght > 2) return false;

  if (diff.length === 2)
    return s[diff[0]] === goal[diff[1]] && s[diff[1]] === goal[diff[0]];

  return hasDuplicateChars(s);
};

const hasDuplicateChars = (s) => {
  const chars = {};

  for (const c of s) {
    if (chars[c]) return true;
    chars[c] = true;
  }

  return false;
};

const getDiff = (s, goal) => {
  const diff = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== goal[i]) {
      diff.push(i);
    }
  }

  return diff;
};

console.log(buddyStrings('ab', 'ba'));
