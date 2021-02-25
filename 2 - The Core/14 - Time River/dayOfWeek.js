function dayOfWeek(birthdayDate) {
  let date = new Date(birthdayDate)
  let year = date.getFullYear()
  let month = date.getMonth()
  let day = date.getDate()
  let dayOfWeek = date.getDay()


  let result = 0

  while(true) {
    result += (day === 29 && month === 1) ? 4 : 1

    if ((year + result) % 100 === 0 && day === 29 && month === 1) continue;

    let actualDayOfWeek = new Date(year + result, month, day).getDay()

    if(actualDayOfWeek === dayOfWeek) return result
  }
}

console.log(dayOfWeek("02-29-2016"))

// 0 - sunday
// 1 - monday