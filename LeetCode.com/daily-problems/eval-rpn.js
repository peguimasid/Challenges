const isNumber = (str) => !isNaN(str);
const isOperator = (str) => '+-*/'.indexOf(str) > -1;

/**
 * @param {string} char
 * @param {number[]} stack
 * @return {number}
 */
function handleExpressionChar(char, stack) {
  if (isNumber(char)) {
    stack.push(parseInt(char));
    return;
  }

  if (!isOperator(char)) return;

  const [lastElement, secondToLastElement] = [stack.pop(), stack.pop()];

  if (char === '+') {
    stack.push(secondToLastElement + lastElement);
  }
  if (char === '-') {
    stack.push(secondToLastElement - lastElement);
  }
  if (char === '*') {
    stack.push(secondToLastElement * lastElement);
  }
  if (char === '/') {
    stack.push(Math.trunc(secondToLastElement / lastElement));
  }
}

/**
 * @param {string[]} tokens
 * @return {number}
 */
function evalRPN(tokens) {
  return tokens.reduce((acc, curr) => {
    handleExpressionChar(curr, acc);
    return acc;
  }, [])[0];
}

// prettier-ignore
console.log(evalRPN(['2', '1', '+', '3', '*'])); // 9
// ((2 + 1) * 3) = 9

// prettier-ignore
console.log(evalRPN(['4', '13', '5', '/', '+'])); // 6
// (4 + (13 / 5))

// prettier-ignore
console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"])) // 22

// ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
// ((10 * (6 / (12 * -11))) + 17) + 5
// ((10 * (6 / -132)) + 17) + 5
// ((10 * 0) + 17) + 5
// (0 + 17) + 5
// 17 + 5
// 22
