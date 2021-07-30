/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let slow:number = 0 , fast:number;
    for(fast = 0;fast <nums.length;fast++){
        if(nums[fast]!==0){
            nums[slow++] = nums[fast];
        }
    }
    for(let i:number=slow;i<fast;i++){
        nums[i]=0;
    }
};