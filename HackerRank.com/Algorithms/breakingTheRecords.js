function breakingRecords(scores) {
  let maxScoreTimes = 0
  let minScoreTimes = 0

  let maxScore = scores[0]
  let minScore = scores[0]

  for (let i = 0; i < scores.length; i++) {
    let actualScore = scores[i]
    if (actualScore > maxScore) {
      maxScore = actualScore
      maxScoreTimes++
    }
    if (actualScore < minScore) {
      minScore = actualScore
      minScoreTimes++
    }
  }

  return [maxScoreTimes, minScoreTimes]
}

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]))