function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
function sumNumbers(root) {
  let result = 0;

  function traverse(node, sum) {
    const currentSum = sum * 10 + node.val;
    if (!node.left && !node.right) {
      result += currentSum;
      return;
    }
    if (node.left) traverse(node.left, currentSum);
    if (node.right) traverse(node.right, currentSum);
  }

  traverse(root, 0);

  return result;
}

// prettier-ignore
const tree1  = new TreeNode(1, new TreeNode(2), new TreeNode(3));
console.log(sumNumbers(tree1)); // 25

// prettier-ignore
const tree2  = new TreeNode(4, new TreeNode(9, new TreeNode(5), new TreeNode(1)), new TreeNode(0));
console.log(sumNumbers(tree2)); // 1026
