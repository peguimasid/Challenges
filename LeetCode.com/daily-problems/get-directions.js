function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} node
 * @param {number} value1
 * @param {number} value2
 * @return {TreeNode}
 */
function findLowestCommonAncestor(node, value1, value2) {
  if (!node) return null;

  if (node.val === value1 || node.val === value2) return node;

  const leftLca = findLowestCommonAncestor(node.left, value1, value2);
  const rightLca = findLowestCommonAncestor(node.right, value1, value2);

  if (!leftLca) return rightLca;
  if (!rightLca) return leftLca;

  return node;
}

/**
 * @param {TreeNode} node
 * @param {number} targetValue
 * @param {string[]} path
 * @return {boolean}
 */
function findPath(node, targetValue, path) {
  if (!node) return false;

  if (node.val === targetValue) return true;

  path.push("L");
  if (findPath(node.left, targetValue, path)) return true;
  path.pop();

  path.push("R");
  if (findPath(node.right, targetValue, path)) return true;
  path.pop();

  return false;
}

/**
 * @param {TreeNode} root
 * @param {number} startValue
 * @param {number} destValue
 * @return {string}
 */
function getDirections(root, startValue, destValue) {
  const lowestCommonAncestor = findLowestCommonAncestor(
    root,
    startValue,
    destValue
  );

  const pathToStart = [];
  const pathToDest = [];

  findPath(lowestCommonAncestor, startValue, pathToStart);
  findPath(lowestCommonAncestor, destValue, pathToDest);

  const directions = "U".repeat(pathToStart.length).concat(...pathToDest);

  return directions;
}

const tree1 = new TreeNode(5);
tree1.left = new TreeNode(1);
tree1.left.left = new TreeNode(3);
tree1.right = new TreeNode(2);
tree1.right.left = new TreeNode(6);
tree1.right.right = new TreeNode(4);

console.log(getDirections(tree1, 3, 6)); // "UURL"

const tree2 = new TreeNode(2);
tree2.left = new TreeNode(1);

console.log(getDirections(tree2, 2, 1)); // "L"
