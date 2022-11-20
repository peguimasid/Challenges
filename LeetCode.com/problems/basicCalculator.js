/**
 * @param {string} s
 * @return {number}
 */
const calculate = (s) => {
  if (!s || !s.length) return null;

  s = s.replace(/\s/g, '');

  let st = [];
  let n = 0;
  let sign = '+';

  for (let i = 0; i < s.length; i++) {
    if (/\d/.test(s[i])) n = n * 10 + Number(s[i]);

    if (/\D/.test(s[i]) || i === s.length - 1) {
      if (sign === '-') st.push(-n);
      if (sign === '+') st.push(n);
      if (sign === '*') st.push(st.pop() * n);
      if (sign === '/') st.push(~~(st.pop() / n));

      sign = s[i];
      n = 0;
    }
  }

  return st.reduce((a, b) => a + b);
};

console.log(calculate('3+2*2'));
console.log(calculate(' 3/2 '));
console.log(calculate('3+5 / 2*9'));
console.log(calculate('14-3/2'));
