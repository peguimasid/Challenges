function isTandemRepeat(string) {
  const middle = Math.floor(string.length / 2)

  const firstPart = string.slice(0, middle)
  const secondPart = string.slice(middle)

  return firstPart === secondPart ? true : false;
}

console.log(isTandemRepeat("tandemtandem"))