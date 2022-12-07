function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const isBetween = (num, start, end) => num <= end && num >= start;

/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
const rangeSumBST = (root, low, high) => {
  if (!root) return 0;

  let result = 0;

  const traverse = (node) => {
    result += isBetween(node.val, low, high) ? node.val : 0;
    if (node?.left) traverse(node.left);
    if (node?.right) traverse(node.right);
  };
  traverse(root);

  return result;
};

// prettier-ignore
const bst = new TreeNode(10, new TreeNode(5, new TreeNode(3), new TreeNode(7)), new TreeNode(15, null, new TreeNode(18)))

console.log(rangeSumBST(bst, 7, 15));
