function minSubArrayLen(target: number, nums: number[]): number {
    if(nums.length+1 > Number.MAX_VALUE) return 0;

    let i:number = -1, j : number = -1, sum:number = 0, resultSubArr: number = nums.length+1;
    while(j < nums.length && i <= j){
        if(sum < target){
            j++;
            sum += nums[j];
            if(j >= nums.length) break;
        }else{
            resultSubArr = resultSubArr < (j-i) ? resultSubArr : (j-i);
            i++;
            sum -= nums[i];
            if(i>j) break;
        }
    }
    return resultSubArr === nums.length+1 ? 0 : resultSubArr;
};