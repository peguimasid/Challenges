/**
 * @param {string} path
 * @return {string}
 */
const simplifyPath = (path) => {
  const stack = [];

  const dirs = path.split('/');

  for (const dir of dirs) {
    if (dir === '..') {
      if (stack.length) stack.pop();
    } else if (dir && dir !== '.') stack.push(dir);
  }

  return `/${stack.join('/')}`;
};

console.log(simplifyPath('/home/')); // "/home"
console.log(simplifyPath('/../')); // "/"
console.log(simplifyPath('/home//foo/')); // "/home/foo"
