function removeElement(nums: number[], val: number): number {
    let slow:number = 0;
    for(let fast:number = 0; fast<nums.length;fast++){
        if(nums[fast]!==val){
            nums[slow++] = nums[fast];
        }
    }
    nums.length = slow;
    return nums.length
};