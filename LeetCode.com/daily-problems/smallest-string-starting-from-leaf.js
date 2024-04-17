function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {string}
 */
function smallestFromLeaf(root) {
  let result = '';

  function traverse(node, str = '') {
    const char = String.fromCharCode(node.val + 97);

    if (!node.left && !node.right) {
      if (!result || char + str < result) {
        result = char + str;
      }
    }
    if (node.left) traverse(node.left, char + str);
    if (node.right) traverse(node.right, char + str);
  }

  traverse(root);

  return result;
}

const bt = new TreeNode(0);
bt.left = new TreeNode(1);
bt.right = new TreeNode(2);
bt.left.left = new TreeNode(3);
bt.left.right = new TreeNode(4);
bt.right.left = new TreeNode(3);
bt.right.right = new TreeNode(4);

console.log(smallestFromLeaf(bt));
