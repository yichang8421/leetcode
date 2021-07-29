/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]} */

var searchRange = function (nums, target) {
    let result = [-1, -1];
    let low = 0, high = nums.length - 1;
    // 找左边界，要从 nums 右侧逼近，要得到 low 的精确值，不能考虑 nums[mid] = target 的情况
    while (low <= high) {
        let mid = low + ((high - low) >> 1);
        if (nums[mid] >= target) {
            high = mid - 1;
        } else if (nums[mid] < target) {
            low = mid + 1;
        }
    }
    // 若 low 的值找不到，说明 target 不存在于 nums 中。
    if (nums[low] !== target) return result;

    result[0] = low;

    high = nums.length - 1;
    // 找右边界，要从 nums 左侧逼近，要得到 high 的精确值，不能考虑 nums[mid] = target 的情况
    while (low <= high) {
        let mid = low + ((high - low) >> 1);
        if (nums[mid] > target) {
            high = mid - 1;
        } else if (nums[mid] <= target) {
            low = mid + 1;
        }
    }
    result[1] = high;
    return result;
};