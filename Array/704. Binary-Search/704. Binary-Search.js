/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    let low = 0, high = nums.length-1;
    let mid = Math.floor((low+high)/2);

    while(low<=high){
        if(nums[mid] === target) return mid;

        if(nums[mid]>target){
            high = mid-1;
            mid = Math.floor((low+high)/2);
        }else if(nums[mid]<target){
            low = mid+1;
            mid = Math.floor((low+high)/2);
        }
    }

    return -1;
};