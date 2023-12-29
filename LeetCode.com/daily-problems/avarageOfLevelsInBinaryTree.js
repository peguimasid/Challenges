function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const averageOfLevels = (root) => {
  let result = {};

  const traverse = (node, level = 0) => {
    if (!result[level]) result[level] = [];
    result[level].push(node.val);
    if (node?.left) traverse(node.left, level + 1);
    if (node?.right) traverse(node.right, level + 1);
  };

  traverse(root);

  return Object.values(result).map(
    (levelArray) =>
      levelArray.reduce((acc, curr) => acc + curr, 0) / levelArray.length
  );
};

const bt = new TreeNode(3);
bt.left = new TreeNode(9);
bt.right = new TreeNode(20);
bt.right.left = new TreeNode(15);
bt.right.right = new TreeNode(7);

console.log(averageOfLevels(bt));
