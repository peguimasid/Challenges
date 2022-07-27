function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
const flatten = (root) => {
  let result = [];

  if (!root) return null;

  const traverse = (node) => {
    result.push(node.val);
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
  };

  traverse(root);

  let curr = root;

  while (result.length) {
    curr.left = null;
    curr.val = result.shift();
    if (result.length) curr.right = new TreeNode();
    curr = curr.right;
  }
};

// const bt = new TreeNode(
//   1,
//   new TreeNode(2, new TreeNode(3), new TreeNode(4)),
//   new TreeNode(5, undefined, new TreeNode(6))
// );
const bt = null;

flatten(bt);

console.log(bt);
