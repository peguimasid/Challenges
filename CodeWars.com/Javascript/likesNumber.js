/**
  @param {string[]} names
  @return {string}
 */
const likes = (names) => {
  const [first, second, third] = names;
  if (!names.length) return 'no one likes this';
  if (names.length === 1) return `${first} likes this`;
  if (names.length === 2) return `${first} and ${second} like this`;
  if (names.length === 3) return `${first}, ${second} and ${third} like this`;

  return `${first}, ${second} and ${names.length - 2} others like this`;
};

console.log(likes([])); //'no one likes this'
console.log(likes(['Peter'])); // 'Peter likes this'
console.log(likes(['Jacob', 'Alex'])); // 'Jacob and Alex like this'
console.log(likes(['Max', 'John', 'Mark'])); // 'Max, John and Mark like this'
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max'])); // 'Alex, Jacob and 2 others like this'
