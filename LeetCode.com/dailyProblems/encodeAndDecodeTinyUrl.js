/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function (longUrl) {
  return `http://tinyurl.com/${btoa(longUrl)}`;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function (shortUrl) {
  return atob(shortUrl.split('http://tinyurl.com/').pop());
};

console.log(
  decode(
    encode(
      'http://badge.example.net/beginner.aspx?aftermath=achiever&actor=air'
    )
  )
);

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */

// https://leetcode.com/problems/design-tinyurl
// http://tinyurl.com/4e9iAk
