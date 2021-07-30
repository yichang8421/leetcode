function removeDuplicates(nums: number[]): number {
    let slow:number = 0;
    for(let fast:number = 0 ;fast<nums.length;fast++){
        if(nums[fast]!==nums[fast+1]){
            nums[slow] = nums[fast];
            slow++;
        }
    }
    return slow;
};