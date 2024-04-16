function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
function addOneRow(root, val, depth) {
  if (depth === 1) {
    let temp = new TreeNode(val);
    temp.left = root;
    root = temp;
    return root;
  }

  function traverse(node, level) {
    if (level + 1 === depth) {
      let temp = node.left;
      node.left = new TreeNode(val, temp);
      temp = node.right;
      node.right = new TreeNode(val, null, temp);
    }
    if (node.left) traverse(node.left, level + 1);
    if (node.right) traverse(node.right, level + 1);
  }

  traverse(root, 1);
  return root;
}

const t1 = new TreeNode(
  4,
  new TreeNode(2, new TreeNode(3), new TreeNode(1)),
  new TreeNode(6, new TreeNode(5))
);
console.log(addOneRow(t1, 1, 2)); // [4, 1, 1, 2, null, null, 6, 3, 1, 5]

const t2 = new TreeNode(4, new TreeNode(2, new TreeNode(3), new TreeNode(1)));

// console.log(addOneRow(t2, 1, 3)); // [4, 2, null, 1, 1, 3, null, null, 1]
