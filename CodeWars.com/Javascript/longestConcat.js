function longestConsec(strarr, k) {
  const n = strarr.length

  if (!n || k > n || k <= 0) return ''

  let concats = []

  for (let i = 0; i < strarr.length; i++) {
    let stringsConcat = ""

    for (let j = 0; j < k; j++) {
      stringsConcat += strarr[i + j] !== undefined ? strarr[i + j] : ''
    }

    concats.push(stringsConcat)
  }

  let bigLength = Math.max(...(concats.map(str => str.length)))

  return concats.find(string => string.length === bigLength)
}

let strarr = ["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"]

console.log(longestConsec(strarr, 3))

// Fazer uma array com as concatenacoes

// Achar a que tem maior quantidade de caracteres

// fazer um find procurando por aquela quantidade de caracteres