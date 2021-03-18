function electionsWinners(votes, k) {
  
  let max = Math.max(...votes)
  
  if(k) {
    return votes.filter(x => x + k > max).length
  }
  
  return votes.filter(x => x === max).length === 1 ? 1 : 0
}