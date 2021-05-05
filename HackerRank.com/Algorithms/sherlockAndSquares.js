function squares(a, b) {
  // let result = 0

  // for (let i = a; i <= b; i++) {
  //   if (Number.isInteger(Math.sqrt(i))) result++
  // }

  // return result
  return (Math.floor(Math.sqrt(b)) - Math.ceil(Math.sqrt(a)) + 1);
}

console.log(squares(240, 490000000000))