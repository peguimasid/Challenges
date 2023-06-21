/**
 * @param {string} url
 * @return {string}
 */
const domainName = (url) => {
  return url
    .replace('https://', '')
    .replace('http://', '')
    .replace('www.', '')
    .split('.')
    .shift();
};

console.log(domainName('http://google.com')); // "google"
console.log(domainName('http://google.co.jp')); // "google"
console.log(domainName('www.xakep.ru')); // "xakep"
console.log(domainName('https://youtube.com')); // "youtube"
console.log(domainName('https://www.1ejy7fzqz3rwnhf2r8g-2zr9nyn146.co.za')); // 1ejy7fzqz3rwnhf2r8g-2zr9nyn146
console.log(domainName('http://www.5lk47ikq-q3ocjlc8ebj95v.io/archive/')); // 5lk47ikq-q3ocjlc8ebj95v
