function lateRide(n) {
  let result = 0

  let hours = Math.floor(n / 60);
  let minutes = n % 60;

  hours = hours.toString()
  minutes = minutes.toString()

  for(let i = 0; i < hours.length; i++) {
    result += Number(hours[i])
  }

  for(let i = 0; i < minutes.length; i++) {
    result += Number(minutes[i])
  }

  return result;
}

console.log(lateRide(808)) // 14
