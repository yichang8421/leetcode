/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    if(nums.length+1>Number.MAX_VALUE) return 0;
    
    let result = nums.length+1, subLength = 0;
    for(let i = 0; i<nums.length;i++){
        let sum = 0;
        for(let j=i;j<nums.length;j++){
            sum += nums[j];
            if(sum >= target){
                subLength = j-i+1;
                result = result < subLength ? result: subLength;
                break;
            }
        }
    }

    return result === nums.length+1 ? 0 : result;
};