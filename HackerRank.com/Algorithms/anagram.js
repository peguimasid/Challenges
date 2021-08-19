const isOddLenght = (string) => (string.length % 2 ? true : false);

function anagram(string) {
  if (isOddLenght(string)) return -1;

  const middle = Math.floor(string.length / 2);

  let firstHalf = string.substring(0, middle);
  let secondHalf = string.substring(middle);

  let result = 0;

  secondHalf
    .split('')
    .filter((char) =>
      firstHalf.includes(char)
        ? (firstHalf = firstHalf.replace(char, ''))
        : result++
    );

  return result;
}

console.log(anagram('asdfjoieufoa'));
console.log(anagram('fdhlvosfpafhalll'));
console.log(anagram('mvdalvkiopaufl'));
