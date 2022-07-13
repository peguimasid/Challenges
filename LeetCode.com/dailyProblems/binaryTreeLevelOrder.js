function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = (root) => {
  let result = [];

  if (!root) return [];

  const traverse = (node, level = 0) => {
    if (!result[level]) result[level] = [];

    if (node.val !== null) result[level].push(node.val);
    if (node?.left) traverse(node.left, level + 1);
    if (node?.right) traverse(node.right, level + 1);
  };

  traverse(root);

  return result;
};

const bt = new TreeNode(
  0,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
);

const bt2 = new TreeNode();

console.log(levelOrder(bt));
console.log(levelOrder(bt2));
