function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const zigzagLevelOrder = (root) => {
  const levels = {};

  const traverse = (node, level = 1) => {
    if (!levels[level]) levels[level] = [];
    levels[level].push(node.val);
    if (node?.left) traverse(node.left, level + 1);
    if (node?.right) traverse(node.right, level + 1);
  };

  if (root) traverse(root);

  return Object.values(levels).map((arr, index) =>
    index % 2 ? arr.reverse() : arr
  );
};

const bt = new TreeNode(
  3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
);

console.log(zigzagLevelOrder(bt));
