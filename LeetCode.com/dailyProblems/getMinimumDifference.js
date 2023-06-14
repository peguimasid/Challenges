function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
const getMinimumDifference = (root) => {
  const traverse = (node, low, high) => {
    if (!node) return high - low;
    return Math.min(
      traverse(node.left, low, node.val),
      traverse(node.right, node.val, high)
    );
  };

  return traverse(root, -Infinity, Infinity);
};

// prettier-ignore
const tree = new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(6));
console.log(getMinimumDifference(tree)); // 1
// prettier-ignore
const tree2 = new TreeNode(1, new TreeNode(0), new TreeNode(48, new TreeNode(12), new TreeNode(49)));
console.log(getMinimumDifference(tree2)); // 1
