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

function incrementOneMonth(date) {
  let startMonth = Number(date.split('-')[0])
  let startYear = Number(date.split('-')[1])

  if(startMonth === 12) {
    date = `01-01-${startYear + 1}`
  } else {
    date = `${startMonth + 1}-01-${startYear}`
  }

  return date
}

function regularMonths(currMonth) {
  currMonth = incrementOneMonth(currMonth)
  
  while(true) {  
    let { month, weekday, year } = formatDate(new Date(currMonth))

    if(weekday === 'Monday') return `${month}-${year}`

    currMonth = `${Number(month) + 1}-01-${Number(year)}`
  
    if(month == 12) {
     currMonth = `01-01-${Number(year) + 1}`
    }
  }
}

// 1º: Ir aumentando o mes em 1 e ir verificando se o primeiro dia daquele mês
// cai na segunda, quando achar, retorno o mês

console.log(regularMonths("12-2100"))