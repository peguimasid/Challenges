function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  if (!nums.length) return null;
  if (nums.length === 1) return new TreeNode(nums[0]);
  const middle = Math.floor(nums.length / 2);
  const root = new TreeNode(nums[middle]);
  const leftArray = nums.slice(0, middle);
  const rightArray = nums.slice(middle + 1);
  root.left = sortedArrayToBST(leftArray);
  root.right = sortedArrayToBST(rightArray);

  return root;
};

// console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));
// console.log(sortedArrayToBST([1, 3]));
console.log(sortedArrayToBST([0, 1, 2, 3, 4, 5]));
