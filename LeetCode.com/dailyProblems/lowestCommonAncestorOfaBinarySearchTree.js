function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = (root, p, q) => {
  let result;

  const traverse = (node) => {
    if (!node) return false;

    const foundNode = node.val === p.val || node.val === q.val;
    const foundInRight = traverse(node.right);
    const foundInLeft = traverse(node.left);

    if (
      (foundNode && foundInLeft) ||
      (foundNode && foundInRight) ||
      (foundInLeft && foundInRight)
    ) {
      result = node;
      return true;
    }

    return foundNode || foundInLeft || foundInRight;
  };

  traverse(root);

  return result;
};

const bt = new TreeNode(6);
bt.left = new TreeNode(2);
bt.right = new TreeNode(8);
bt.left.left = new TreeNode(0);
bt.left.right = new TreeNode(4);
bt.right.left = new TreeNode(7);
bt.right.right = new TreeNode(9);
bt.left.right.left = new TreeNode(3);
bt.left.right.right = new TreeNode(5);

const p = bt.left;
const q = bt.left.right;

console.log(lowestCommonAncestor(bt, p, q));
