function timeInWords(h, m) {
  let hours = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
  };
  let minutes = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "quarter",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "fifteen",
    20: "twenty",
    21: "twenty one",
    22: "twenty two",
    23: "twenty three",
    24: "twenty four",
    25: "twenty five",
    26: "twenty six",
    27: "twenty seven",
    28: "twenty eight",
    29: "twenty nine",
    30: "half",
  };

  let hour = hours[h];

  if (m === 0) return `${hour} o' clock`;

  let minute = m > 30 ? minutes[60 - m] : minutes[m];

  if (m >= 1 && m <= 30) {
    return `${minute} ${
      m === 15 || m === 30 ? "" : m === 1 ? "minute " : "minutes "
    }past ${hour}`;
  }

  if (m > 30) {
    return `${minute} ${m === 45 ? "" : m === 1 ? "minute " : "minutes "}to ${
      hours[h + 1]
    }`;
  }
}

console.log(timeInWords(5, 28));
