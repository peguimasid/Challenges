function removeChar(str) {
  return str
    .split('')
    .filter((item, index) => index !== 0 && index !== str.length - 1)
    .join('');
}
