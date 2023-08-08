/**
 * @param {number} n
 * @return {number}
 */
function minDistance(n) {
  const factors = [];

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) factors.push(i);
  }

  let result = Number.MAX_SAFE_INTEGER;

  for (let i = 1; i < factors.length; i++) {
    const prev = factors[i - 1];
    const curr = factors[i];

    result = Math.min(result, curr - prev);
  }

  return result;
}

console.log(minDistance(13013));
