function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
const leafSimilar = (root1, root2) => {
  const countLeaf = (node) => {
    if (!node) return '';
    if (node.left && node.right) {
      return `${countLeaf(node.left)}${countLeaf(node.right)}`;
    }
    if (node?.left) return countLeaf(node.left);
    if (node?.right) return countLeaf(node.right);
    if (!node.left && !node.right) return node.val;
  };

  return countLeaf(root1) === countLeaf(root2);
};

// prettier-ignore
const bt1 = new TreeNode(3, new TreeNode(5, new TreeNode(6), new TreeNode(2, new TreeNode(7), new TreeNode(14))), new TreeNode(1, new TreeNode(9), new TreeNode(8)));
// prettier-ignore
const bt2 = new TreeNode(3, new TreeNode(5, new TreeNode(6), new TreeNode(71)), new TreeNode(1, new TreeNode(4), new TreeNode(2, new TreeNode(9), new TreeNode(8))));

console.log(leafSimilar(bt1, bt2));
