function elementIsObject(data) {
  return typeof data === 'object'
}

function countElements(string) {
  let result = 0

  function helper(helperInput) {
    if (!elementIsObject(helperInput)) return ++result

    for (let element of helperInput) {
      if (elementIsObject(element)) helper(element)
      if (!elementIsObject(element)) result++
    }
  }

  helper(JSON.parse(string))

  return result
}

console.log(countElements("true"))