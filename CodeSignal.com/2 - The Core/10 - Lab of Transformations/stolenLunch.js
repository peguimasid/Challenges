function findItem(char) {
  const itemsToReplace = '0123456789abcdefghij'
  const itemPosition = 'abcdefghij0123456789'.indexOf(char)

  return itemsToReplace[itemPosition]
}

function stolenLunch(note) {
  return note.replace(/[0-9a-j]/g, (char) => findItem(char))
}


console.log(stolenLunch("you'll n4v4r 6u4ss 8t: cdja"))