function beautifulBinaryString(b) {
  const matches = b.match(/010/g);
  return matches ? matches.length : 0;
}

console.log(beautifulBinaryString('0100101010'));
