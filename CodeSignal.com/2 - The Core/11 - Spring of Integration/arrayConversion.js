  function isEvenInteraction(interaction) {
    return interaction % 2 === 0
  }
  
  
  function helper(helperInput, interaction = 0) {
    let helperResult = []

    if(helperInput.length === 1) return helperInput

    for(let i = 0; i < helperInput.length; i += 2) {
      let current = helperInput[i]
      let next = helperInput[i + 1]

      if(isEvenInteraction(interaction)) helperResult.push(current + next)
      else { 
        helperResult.push(current * next)
      }
    }

    interaction++

    return helper(helperResult, interaction)
  }

function arrayConversion(array) {
  let [result] = helper(array)

  return result
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]))

// [1, 2, 3, 4, 5, 6, 7, 8] interação 1

// 1 + 2 = 3
// 3 + 4 = 7
// 5 + 6 = 11
// 7 + 8 = 15

// [3, 7, 11, 15] interação 2

// 3 * 7 = 21
// 11 * 15 = 165

// [21, 165] interação 3

// 21 + 165 = 189