function jumpingOnClouds(c, k) {
  // return c.reduce((acc, curr, index) => index % k === 0 ? curr === 1 ? acc -= 3 : acc -= 1 : acc -= 0, 100)

  let energy = 100

  for (let i = 0; i < c.length; i += k) {
    energy--

    if (c[i] === 1) energy -= 2
  }

  return energy
}

console.log(jumpingOnClouds([0, 0, 1, 0], 2))
