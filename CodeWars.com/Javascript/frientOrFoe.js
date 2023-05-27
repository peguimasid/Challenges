/**
 * @param {string[]} friends
 * @return {string[]}
 */
function friend(friends) {
  return friends.filter((friend) => friend.length === 4);
}

console.log(friend(['Ryan', 'Kieran', 'Mark'])); // ["Ryan", "Mark"]
console.log(friend(['Ryan', 'Jimmy', '123', '4', 'Cool Man'])); // ["Ryan"]
//prettier-ignore
console.log(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"])) // ["Jimm", "Cari", "aret"]
console.log(friend(['Love', 'Your', 'Face', '1'])); // ["Love", "Your", "Face"]
