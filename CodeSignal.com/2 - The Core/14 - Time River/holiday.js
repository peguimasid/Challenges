var weekDays = {
  "Monday": 1,
  "Tuesday": 2,
  "Wednesday": 3,
  "Thursday": 4,
  "Friday": 5,
  "Saturday": 6,
  "Sunday": 7,
}

var months = {
  "January": 1, 
  "February": 2, 
  "March": 3, 
  "April": 4, 
  "May": 5, 
  "June": 6, 
  "July": 7, 
  "August": 8, 
  "September": 9, 
  "October": 10, 
  "November": 11, 
  "December": 12
}

monthsLenght = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

function formatDate(date) {
  let p = new Intl.DateTimeFormat('en-US',{
    year:'numeric',
    month:'2-digit',
    day:'2-digit',
    weekday: 'long',
  }).formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
  }, {});

  return p
}

function holiday(x, weekDay, month, yearNumber) {
  let week = 1

  let monthsDays = monthsLenght[months[month] -1]

  if(month === 'February' && yearNumber % 4 === 0) monthsDays++

  for(let i = 1; i <= monthsDays; i++) {
    const date = formatDate(new Date(`${months[month]}-${i}-${yearNumber}`))
    if(Number(date.month) !== months[month]) return -1
    if(date.weekday === weekDay && week === x) return Number(date.day)
    if(Number(date.day) === monthsDays) return -1
    if(date.weekday === weekDay) week++
  }
}

console.log(holiday(5, "Monday", "February", 2016))

// 1º: Montar a data com os dados passados

