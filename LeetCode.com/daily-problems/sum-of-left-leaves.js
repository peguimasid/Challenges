function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
function sumOfLeftLeaves(root) {
  let result = 0;

  /**
   * @param {TreeNode} node
   * @param {boolean} shouldSum
   * @return {void}
   */
  function check(node, shouldSum) {
    if (!node.left && !node.right && shouldSum) {
      result += node.val;
      return;
    }
    if (node.left) check(node.left, true);
    if (node.right) check(node.right, false);
  }

  check(root, false);

  return result;
}

const t1 = new TreeNode(
  3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
);
console.log(sumOfLeftLeaves(t1)); // 24
