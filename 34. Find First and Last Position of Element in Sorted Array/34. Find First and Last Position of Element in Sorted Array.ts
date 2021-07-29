function searchRange(nums: number[], target: number): number[] {
    let result: number[] = [-1, -1];
    let low: number = 0, high: number = nums.length - 1;

    while (low <= high) {
        let mid: number = low + ((high - low) >> 1);
        if (nums[mid] >= target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    if (nums[low] !== target) return result;
    result[0] = low;

    high = nums.length - 1;
    while (low <= high) {
        let mid: number = low + ((high - low) >> 1);
        if (nums[mid] > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    // low 存在，high 一定存在（二者相等）
  result[1] = high;
    return result;
};