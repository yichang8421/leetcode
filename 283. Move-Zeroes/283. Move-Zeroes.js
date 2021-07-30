/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    let slow = 0, fast = 0;
    for(fast = 0;fast<nums.length;fast++){
        if(nums[fast]!==0){
            nums[slow++]=nums[fast]
        }
    }
    for(let i = slow; i<fast; i++){
        nums[i] = 0;
    }
};