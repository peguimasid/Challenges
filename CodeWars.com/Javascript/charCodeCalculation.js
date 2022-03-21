function calc(string) {
  const total1 = string
    .split('')
    .map((char) => char.charCodeAt())
    .join('');

  const total2 = total1
    .split('')
    .map((char) => (char === '7' ? '1' : char))
    .join('');

  return (
    total1.split('').reduce((acc, curr) => acc + Number(curr), 0) -
    total2.split('').reduce((acc, curr) => acc + Number(curr), 0)
  );
}

console.log(calc('ABC'));
