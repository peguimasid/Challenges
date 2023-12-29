function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {TreeNode}
 */
const findTargetNode = (root, target) => {
  const traverse = (node) => {
    if (!node) return null;
    if (node === target) return node;
    if (node.left) node.left.parent = node;
    if (node.right) node.right.parent = node;
    return traverse(node.left) || traverse(node.right);
  };

  if (root) return traverse(root);

  return null;
};

/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
const distanceK = (root, target, k) => {
  if (!root) return [];

  const targetNode = findTargetNode(root, target);

  const result = [];

  const visit = (node, count) => {
    if (!node || node.visited) return;
    if (count === 0) return result.push(node.val);
    node.visited = true;
    visit(node.left, count - 1);
    visit(node.right, count - 1);
    visit(node.parent, count - 1);
  };

  visit(targetNode, k);

  return result;
};

const tree = new TreeNode(3);
tree.left = new TreeNode(5);
tree.right = new TreeNode(1);
tree.left.left = new TreeNode(6);
tree.left.right = new TreeNode(2);
tree.right.left = new TreeNode(0);
tree.right.right = new TreeNode(8);
tree.left.right.left = new TreeNode(7);
tree.left.right.right = new TreeNode(4);

console.log(distanceK(tree, tree.left, 2)); // [7, 4, 1]
