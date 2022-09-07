function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {string}
 */
const tree2str = (root) => {
  if (!root) return '';
  if (!root.left && !root.right) return `${root.val}`;
  if (!root.right) return `${root.val}(${tree2str(root.left)})`;
  return `${root.val}(${tree2str(root.left)})(${tree2str(root.right)})`;
};

let bt = new TreeNode(1);
bt.left = new TreeNode(2);
bt.left.left = new TreeNode(4);
bt.right = new TreeNode(3);

console.log(tree2str(bt));
