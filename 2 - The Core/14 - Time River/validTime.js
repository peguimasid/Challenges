function validTime(time) {
  let hours = time.split(':')[0]
  let minutes = time.split(':')[1]

  return hours < 23 && minutes <= 59
}

console.log(validTime("13:58"))