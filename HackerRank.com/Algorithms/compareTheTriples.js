function compareTriplets(a, b) {
  let alicePoints = 0
  let bobPoints = 0

  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) alicePoints++
    if (a[i] < b[i]) bobPoints++
  }

  return [alicePoints, bobPoints]
}

const alice = [1, 2, 3]
const bob = [3, 2, 1]

console.log(compareTriplets(alice, bob))