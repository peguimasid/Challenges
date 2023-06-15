function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxLevelSum = (root) => {
  const levelsSums = {};

  const traverse = (node, level = 1) => {
    if (!levelsSums[level]) levelsSums[level] = 0;
    levelsSums[level] += node.val;
    if (node?.right) traverse(node.right, level + 1);
    if (node?.left) traverse(node.left, level + 1);
  };

  if (root) traverse(root);

  let result = 0;
  let maxValue = -Infinity;

  for (const [key, value] of Object.entries(levelsSums)) {
    if (value > maxValue) {
      maxValue = value;
      result = key;
    }
  }

  return result;
};

const tree = new TreeNode(
  1,
  new TreeNode(7, new TreeNode(7), new TreeNode(-8)),
  new TreeNode(0)
);

console.log(maxLevelSum(tree));
