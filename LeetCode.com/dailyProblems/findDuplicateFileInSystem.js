/**
 * @param {string[]} paths
 * @return {string[][]}
 */
const findDuplicate = (paths) => {
  let result = [];
  let fileContents = {};

  for (const s of paths) {
    const [path, ...files] = s.split(' ');

    for (const file of files) {
      const content = file.match(/\(([^)]+)\)/)[1];
      const fileName = file.replace(`(${content})`, '');
      if (!fileContents[content]) fileContents[content] = [];
      fileContents[content].push(`${path}/${fileName}`);
    }
  }

  for (const p of Object.values(fileContents)) {
    if (p.length > 1) result.push(p);
  }

  return result;
};

let paths = [
  'root/a 1.txt(abcd) 2.txt(efgh)',
  'root/c 3.txt(abcd)',
  'root/c/d 4.txt(efgh)',
  'root 4.txt(efgh)',
];

console.log(findDuplicate(paths));
// [
//   ['root/a/2.txt', 'root/c/d/4.txt', 'root/4.txt'],
//   ['root/a/1.txt', 'root/c/3.txt'],
// ];
