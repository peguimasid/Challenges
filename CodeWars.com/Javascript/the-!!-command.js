/**
 * @param {string} history
 * @return {string}
 */
function bangBang(history) {
  const commands = history.split('\n');
  const lastLine = commands[commands.length - 1].trim();
  const lastCommand = lastLine.slice(lastLine.indexOf(' ') + 1).trim();

  return lastCommand;
}

const str1 =
  '   1  cd /pub\n  2  more beer\n  3  lost\n  4  ls \n  5  touch me \n  6  chmod 000 me \n  7  more me\n  8  history';
console.log(bangBang(str1)); // "history"
const str2 =
  '   1  cd /pub\n  2  more beer\n  3  lost\n  4  ls \n  5  touch me \n  6  chmod 000 me \n  7  history\n  8  more me';
console.log(bangBang(str2)); // "more me"

const str3 =
  '   1  cd /pub\n  2  more beer\n  3  lost\n  4  ls \n  5  touch me \n  6  chmod 000 me \n  7  history\n  8  more me\n 109 chmod 000 me';
console.log(bangBang(str3)); // "chmod 000 me"
