function tennisSet(score1, score2) {
  let maxScore = Math.max(score1, score2)
  let minScore = Math.min(score1, score2);

  return  (maxScore === 6 && minScore < 5) ||
          (maxScore === 7 && minScore >= 5 && minScore <=6); 
}

console.log(tennisSet(3, 6)) // true