function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */
const getTargetCopy = (original, cloned, target) => {
  const dfs = (node) => {
    if (!node) return null;
    if (node.val === target.val) return node;
    return dfs(node.left) || dfs(node.right);
  };

  return dfs(cloned);
};

const tree = new TreeNode(7);
tree.left = new TreeNode(4);
tree.right = new TreeNode(3);
tree.right.left = new TreeNode(6);
tree.right.right = new TreeNode(19);

console.log(getTargetCopy(null, tree, new TreeNode(3)));
