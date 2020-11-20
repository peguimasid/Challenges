function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
  const sumOfStrongsAreEqual = yourLeft == friendsLeft && yourRight == friendsRight || yourRight == friendsLeft && yourLeft == friendsRight

  if (sumOfStrongsAreEqual) return true; 

  return false;
}

console.log(areEquallyStrong(10, 5, 5, 10));