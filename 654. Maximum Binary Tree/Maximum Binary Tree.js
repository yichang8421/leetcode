/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
let build = function (nums, low, high) {
    if (low > high) {
        return null;
    }

    let maxIndex = -1, max = Number.MIN_SAFE_INTEGER;
    for (let i = low; i <= high; i++) {
        if (max < nums[i]) {
            max = nums[i];
            maxIndex = i;
        }
    }

    let root = new TreeNode(max);
    root.left = build(nums, low, maxIndex - 1);
    root.right = build(nums, maxIndex + 1, high)
    return root;
}

var constructMaximumBinaryTree = function (nums) {
    return build(nums, 0, nums.length - 1);
};