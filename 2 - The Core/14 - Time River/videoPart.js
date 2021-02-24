function videoPart(part, total) {
  const partHoursToSeconds = Number(part.split(':')[0] * 60 * 60)
  const partMinutesToSeconds = Number(part.split(':')[1] * 60)
  const partSeconds = Number(part.split(':')[2])

  const totalHoursToSeconds = Number(total.split(':')[0] * 60 * 60)
  const totalMinutesToSeconds = Number(total.split(':')[1] * 60)
  const totalSeconds = Number(total.split(':')[2])
  
  let partTotalSeconds =  partHoursToSeconds + partMinutesToSeconds + partSeconds
  let totalVideoSeconds =  totalHoursToSeconds + totalMinutesToSeconds + totalSeconds

  let divisor = 2

  while(divisor <= 1000000) {
    if(partTotalSeconds % divisor !== 0 || totalVideoSeconds % divisor !== 0) {
      divisor++
    } else {
      partTotalSeconds = partTotalSeconds / divisor
      totalVideoSeconds = totalVideoSeconds / divisor
    }
  }

  return [partTotalSeconds, totalVideoSeconds]
}

console.log(videoPart("00:02:20", "00:10:00"))