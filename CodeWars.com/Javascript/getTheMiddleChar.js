function getMiddle(string) {
  const len = string.length;
  return len % 2 === 0
    ? `${string[len / 2 - 1]}${string[len / 2]}`
    : `${string[Math.floor(len / 2)]}`;
}

console.log(getMiddle('test'));
console.log(getMiddle('testing'));
