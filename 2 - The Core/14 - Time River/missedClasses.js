var weekDays = {
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
  7: "Sunday",
}

function formatDate(date) {
  let p = new Intl.DateTimeFormat('en-US',{
    weekday: 'long',
  }).formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
  }, {});

  return p
}

function missedClasses(year, daysOfTheWeek, holidays) {
  let result = 0

  const classWeekDays = daysOfTheWeek.map(day => weekDays[day])
  const holidayWeekDays = holidays.map(holiday => formatDate(new Date(`${holiday.split('-')[0]}-${holiday.split('-')[1]}-${Number(holiday.split('-')[0]) < 9 ? year + 1 : year }`)).weekday)

  for (let i = 0; i < classWeekDays.length; i++) {
    const classDay = classWeekDays[i]

    for (let j = 0; j < holidayWeekDays.length; j++) {
      const holidayDay = holidayWeekDays[j]
      
      if(classDay === holidayDay) result++     
    }
  }
  
  return result
}

console.log(missedClasses(2015, [2, 3], ["11-04", "02-22", "02-23", "03-07", "03-08", "05-09"]))