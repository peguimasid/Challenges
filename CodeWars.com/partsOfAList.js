function partlist(arr) {
  return arr.reduce((acc, _curr, i, arr) => {
    if (i > 0) acc.push([arr.slice(0, i).join(' '), arr.slice(i).join(' ')]);
    return acc;
  }, []);
}

// console.log(partlist(['I', 'wish', 'I', "hadn't", 'come']));
// [["I", "wish I hadn't come"], ["I wish", "I hadn't come"], ["I wish I", "hadn't come"], ["I wish I hadn't", "come"]])

console.log(partlist(['cdIw', 'tzIy', 'xDu', 'rThG']));
// [["cdIw", "tzIy xDu rThG"], ["cdIw tzIy", "xDu rThG"], ["cdIw tzIy xDu", "rThG"]])

// console.log(partlist(['vJQ', 'anj', 'mQDq', 'sOZ']));
// [["vJQ", "anj mQDq sOZ"], ["vJQ anj", "mQDq sOZ"], ["vJQ anj mQDq", "sOZ"]])
