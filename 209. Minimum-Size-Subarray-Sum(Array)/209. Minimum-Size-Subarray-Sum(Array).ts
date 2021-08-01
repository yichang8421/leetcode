function minSubArrayLen(target: number, nums: number[]): number {
    if (nums.length + 1 > Number.MAX_VALUE) return 0;

    // 第一种写法
    // let i:number = -1, j : number = -1, sum:number = 0, resultSubArr: number = nums.length+1;
    // while(j < nums.length && i <= j){
    //     if(sum < target){
    //         j++;
    //         sum += nums[j];
    //         if(j >= nums.length) break;
    //     }else{
    //         resultSubArr = resultSubArr < (j-i) ? resultSubArr : (j-i);
    //         i++;
    //         sum -= nums[i];
    //         if(i>j) break;
    //     }
    // }

    // 第二种写法
    let i: number = -1, sum: number = 0, resultSubArr: number = nums.length + 1;
    for (let j: number = 0; j < nums.length; j++) {
        sum += nums[j];
        while (sum >= target && i <= j) {
            resultSubArr = resultSubArr < (j - i) ? resultSubArr : (j - i);
            i++;
            sum -= nums[i];
        }
    }

    return resultSubArr === nums.length + 1 ? 0 : resultSubArr;
};