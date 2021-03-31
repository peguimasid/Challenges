function timeConversion(s) {
  const time = s.split(/[A-Z]/)[0]
  const AMPM = s[s.length - 2].concat(s[s.length - 1])

  let hours = time.split(':')[0]
  let minutes = time.split(':')[1]
  let seconds = time.split(':')[2]

  if (AMPM === 'AM' && hours != 12 || AMPM === 'PM' && hours == 12) return time

  for (let i = 1; i <= 12; i++) {
    hours++
    if (hours == 24) hours = '00'
  }


  return `${hours}:${minutes}:${seconds}`
}

console.log(timeConversion("12:45:54PM")) // 19:05:45
// console.log(timeConversion("03:05:45PM")) // 15:05:45
// console.log(timeConversion("03:05:45AM")) // 03:05:45