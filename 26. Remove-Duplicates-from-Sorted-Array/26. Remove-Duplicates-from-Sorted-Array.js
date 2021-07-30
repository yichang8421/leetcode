/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    let slow = 0;
    for(let fast=0; fast<nums.length;fast++){
        if(nums[fast]!==nums[fast+1]){
            nums[slow++] = nums[fast];
        }
    }
    return slow;
};