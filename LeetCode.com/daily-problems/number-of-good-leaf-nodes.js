function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @param {number} distance
 * @return {number}
 */
function countPairs(root, distance) {
  let result = 0;

  const dfs = (node) => {
    if (!node) return [];
    if (!node.left && !node.right) return [1];

    const left = dfs(node.left);
    const right = dfs(node.right);

    for (const l of left) {
      for (const r of right) {
        if (l + r <= distance) result++;
      }
    }

    const distances = [];

    for (const l of left) {
      if (l < distance) distances.push(l + 1);
    }
    for (const r of right) {
      if (r < distance) distances.push(r + 1);
    }

    return distances;
  };

  dfs(root);

  return result;
}

const tree1 = new TreeNode(1);
tree1.left = new TreeNode(2);
tree1.right = new TreeNode(3);
tree1.left.left = new TreeNode(4);
console.log(countPairs(tree1, 3)); // 1

const tree2 = new TreeNode(1);
tree2.left = new TreeNode(2);
tree2.right = new TreeNode(3);
tree2.left.left = new TreeNode(4);
tree2.left.right = new TreeNode(5);
tree2.right.left = new TreeNode(6);
tree2.right.right = new TreeNode(7);
console.log(countPairs(tree2, 3)); // 2

const tree3 = new TreeNode(1);
tree3.left = new TreeNode(1);
tree3.right = new TreeNode(1);
console.log(countPairs(tree3, 2)); // 1
