function formatDate(date) {
  let p = new Intl.DateTimeFormat('pt-BR',{
    year:'numeric',
    month:'2-digit',
    day:'2-digit',
    hour:'2-digit',
    minute:'2-digit',
    hour12: false
  }).formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
  }, {});

  return p
}

function curiousClock(someTime, leavingTime) {
  const actualDate = Date.parse(someTime)
  const meetingDate = Date.parse(leavingTime)

  const difference = meetingDate - actualDate

  const time = formatDate(new Date(actualDate - difference))

  return `${time.year}-${time.month}-${time.day} ${time.hour}:${time.minute}`
}

console.log(curiousClock("2016-08-26 22:40", "2016-08-29 10:00"))

// para resolver esse exercicio eu tenho que fazer o seguint

// 1º: pega a data que comecou a girar ao contrário e descobrir quantas horas
// teriar se passado se o relógio estivesse continuando normalmente

// 2º: descobrindo isso, eu pego o numero de horas que teriam se passado com o
// relógio girando normalmente e retrocedo a partir de "startTime"

// 3º: achando o tempo que retrocedeu eu retorno a data que seria no passado