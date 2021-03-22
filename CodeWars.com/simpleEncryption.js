function enc(text) {
  if (!text) return null

  let secondChars = ""
  let notSecondChars = ""
  for (let j = 0; j < text.length; j++) {
    j % 2 === 0 ? notSecondChars += text[j] : secondChars += text[j]
  }

  return secondChars += notSecondChars
}

function encrypt(text, n) {
  if (n <= 0) return text
  for (let i = 0; i < n; i++) {
    let textEncrypted = enc(text)
    text = textEncrypted
  }

  return text
}

function decrypt(encryptedText, n) {
  if (n <= 0) return encryptedText
  let notEnc = Math.floor(encryptedText.length / 2)

  let number = 0
  for (let i = 0; i < n; i++) {
    let text = ""
    for (let j = notEnc; j < encryptedText.length; j++) {
      text += number < notEnc ? (encryptedText[j] += encryptedText[number]) : encryptedText[j]
      number++
    }
    number = 0
    encryptedText = text
  }

  return encryptedText
}
// console.log(encrypt("This is a test!", 1))
console.log(decrypt("s eT ashi tist!", 2))


// Encrypted
// h 0
// s 1
// i 2
//   3
//   4
// e 5
// t 6

// T 7
// i 8
//   9
// s 10
// a 11
// t 12
// s 13
// ! 14