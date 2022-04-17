function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

TreeNode.prototype.insert = function (val, root = this) {
  if (!root) return new TreeNode(val);

  if (val < root.val) root.left = this.insert(val, root.left);
  if (val > root.val) root.right = this.insert(val, root.right);

  return root;
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const getNodeValues = (root) => {
  let result = [];

  let walkThrough = (node) => {
    result.push(node.val);
    if (node.left) walkThrough(node.left);
    if (node.right) walkThrough(node.right);
  };

  walkThrough(root);

  return result;
};

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const increasingBST = (root) => {
  const nodeValues = getNodeValues(root);

  const nodesSorted = nodeValues.sort((a, b) => a - b);

  let result = new TreeNode(nodesSorted[0]);
  let ret = result;

  for (let i = 1; i < nodesSorted.length; i++) {
    console.log(result);
    const nodeVal = nodesSorted[i];

    result.right = new TreeNode(nodeVal);
    result = result.right;
  }

  return ret;
};

const root = new TreeNode(0);
root.insert(1);

// const root = new TreeNode(5);
// root.insert(3);
// root.insert(6);

// root.insert(2);
// root.insert(4);
// root.insert(8);

// root.insert(1);
// root.insert(7);
// root.insert(9);

console.log(JSON.stringify(increasingBST(root), null, 2));
