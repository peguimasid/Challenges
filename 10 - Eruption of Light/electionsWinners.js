function electionsWinners(votes, k) {
  // find the most voted
 const max = Math.max(...votes);
 
 let count = 0
 
 // if there are no votes left
if (k === 0) {
  for (vote of votes)
    if (vote === max) count ++;
     
    return count === 1 ? 1 : 0
 }

for (vote of votes)
  if (max < vote + k) count++

 return count;
}
