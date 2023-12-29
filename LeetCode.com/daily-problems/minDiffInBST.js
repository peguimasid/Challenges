function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
const minDiffInBST = (root) => {
  const nodeValues = [];

  const traverse = (node) => {
    nodeValues.push(node.val);
    if (node?.left) traverse(node.left);
    if (node?.right) traverse(node.right);
  };
  if (root) traverse(root);

  nodeValues.sort((a, b) => a - b);

  let result = Infinity;

  for (let i = 0; i < nodeValues.length - 1; i++) {
    result = Math.min(result, nodeValues[i + 1] - nodeValues[i]);
  }

  return result;
};

const bt = new TreeNode(
  4,
  new TreeNode(2, new TreeNode(1), new TreeNode(3)),
  new TreeNode(6)
);
const bt2 = new TreeNode(
  27,
  new TreeNode(34),
  new TreeNode(58, new TreeNode(50), new TreeNode(44))
);

console.log(minDiffInBST(bt));
console.log(minDiffInBST(bt2));
