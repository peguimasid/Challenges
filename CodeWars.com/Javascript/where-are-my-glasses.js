/**
 * @param {string[]} arr
 * @return {number}
 */
function findGlasses(arr) {
  return arr.findIndex((item) => /O-+O/.test(item));
}

console.log(findGlasses(["phone", "O-O", "coins", "keys"])); // 1
console.log(findGlasses(["OO", "wallet", "O##O", "O----O"])); // 3
console.log(findGlasses(["O_O", "O-O", "OwO"])); // 1
console.log(findGlasses(["O--#--O", "dustO---Odust", "more dust"])); // 1
console.log(
  findGlasses([
    "floor",
    "the floor again",
    "pockets",
    "bed",
    "cabinet",
    "the top of my head O-O",
  ])
); // 5
console.log(findGlasses(["OOOO----~OOO", "-------", "OOOOOOO", "OO-OO-OO-O"])); // 3
