function sortedSquares(nums: number[]): number[] {
    let result: number[] = new Array(nums.length);
    let i: number = 0, j: number = nums.length - 1;
    let k: number = nums.length - 1;
    while (!(k < 0)) {
        if (nums[i] * nums[i] > nums[j] * nums[j]) {
            result[k] = nums[i] * nums[i];
            i++;
        } else {
            result[k] = nums[j] * nums[j];
            j--;
        }
        k--;
    }
    return result;
}