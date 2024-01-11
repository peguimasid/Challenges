function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
function maxAncestorDiff(root) {
  let result = 0;

  function traverse(node, acc = []) {
    const maxDiff = Math.max(...acc.map((num) => Math.abs(node.val - num)));
    result = Math.max(result, maxDiff);

    if (node.left) traverse(node.left, [...acc, node.val]);
    if (node.right) traverse(node.right, [...acc, node.val]);
  }

  traverse(root);

  return result;
}

// prettier-ignore
const bt = new TreeNode(8, new TreeNode(3, new TreeNode(1), new TreeNode(6, new TreeNode(4), new TreeNode(7))), new TreeNode(10, null, new TreeNode(14, new TreeNode(13))));
// prettier-ignore
const bt2 = new TreeNode(1, null, new TreeNode(2, null, new TreeNode(0, new TreeNode(3))));

console.log(maxAncestorDiff(bt));
console.log(maxAncestorDiff(bt2));
