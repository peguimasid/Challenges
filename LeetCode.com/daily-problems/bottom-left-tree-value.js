function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
function findBottomLeftValue(root) {
  let result = 0;
  let maxLevel = 0;

  function traverse(node, level) {
    if (!node) return;

    if (level >= maxLevel) {
      maxLevel = level;
      result = node.val;
    }

    traverse(node.right, level + 1);
    traverse(node.left, level + 1);
  }

  traverse(root, 0);

  return result;
}

const tree = new TreeNode(2, new TreeNode(1), new TreeNode(3));
console.log(findBottomLeftValue(tree)); // 1

const tree2 = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4), null),
  new TreeNode(3, new TreeNode(5, new TreeNode(7), null), new TreeNode(6))
);
console.log(findBottomLeftValue(tree2)); // 7

const tree3 = new TreeNode(1);

console.log(findBottomLeftValue(tree3)); // 1

const tree4 = new TreeNode(0, null, new TreeNode(-1));

console.log(findBottomLeftValue(tree4)); // -1
