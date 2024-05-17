function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {TreeNode}
 */
function removeLeafNodes(root, target) {
  let changes = true;

  while (changes) {
    changes = false;
    let curr = root;

    function traverse(node, prev, dir) {
      if (!node.left && !node.right && node.val === target) {
        if (!prev) {
          root = null;
          return;
        }
        prev[dir] = null;
        changes = true;
        return;
      }
      if (node.left) traverse(node.left, node, 'left');
      if (node.right) traverse(node.right, node, 'right');
    }

    traverse(curr);
  }

  return root;
}

const tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.left.left = new TreeNode(2);
tree.right = new TreeNode(3);
tree.right.left = new TreeNode(2);
tree.right.right = new TreeNode(4);

console.log(removeLeafNodes(tree, 2));

const tree2 = new TreeNode(1);
tree2.left = new TreeNode(1);
tree2.right = new TreeNode(1);
console.log(removeLeafNodes(tree2, 1));
