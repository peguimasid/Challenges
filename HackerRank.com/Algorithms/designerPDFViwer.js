function designerPdfViewer(h, word) {
  let alpabeth = 'abcdefghijklmnopqrstuvwxyz'

  let frequency = {}
  for (let i = 0; i < alpabeth.length; i++) frequency[alpabeth[i]] = h[i]

  let result = []
  for (let char of word) result.push(frequency[char])

  return word.length * Math.max(...result)
}

console.log(designerPdfViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7], 'zaba'))