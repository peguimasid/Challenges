function center(strng, width, fill = ' ') {
  let result = fill.repeat(width);
  let rest = result.length - strng.length;

  if (rest <= 0) return strng;
  if (rest % 2 === 0)
    return `${fill.repeat(rest / 2)}${strng}${fill.repeat(rest / 2)}`;
  if (rest % 2 !== 0)
    return `${fill.repeat(Math.ceil(rest / 2))}${strng}${fill.repeat(
      Math.floor(rest / 2)
    )}`;

  return rest;
}
console.log(center('a', 3));
console.log(center('abc', 10, '_'));
console.log(center('abcdefg', 2));
