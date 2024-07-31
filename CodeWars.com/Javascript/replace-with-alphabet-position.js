/**
 * @param {string} text
 * @return {string}
 */
function alphabetPosition(text) {
  return text
    .replace(/[^a-zA-Z]/g, "")
    .split("")
    .map((char) => char.toLowerCase().charCodeAt() - 96)
    .join(" ");
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
