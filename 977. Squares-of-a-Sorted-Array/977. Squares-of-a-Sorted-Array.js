/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
    let index = nums.length, m = 0 ,n = 0;
    let result = [];
    for(let i= 0;i<nums.length;i++){
        if(!(nums[i]<0)){
            index = i;
            break;
        } 
    }
    
    for(let i=0;i<nums.length;i++){
        nums[i] *= nums[i];
    }

    if(index===0) return nums;

    m=index-1;
    n=index;
    while(!(m<0) && n<nums.length){
        if(nums[m]>=nums[n]){
            result.push(nums[n]);
            n++;
        }else{
            result.push(nums[m]);
            m--;
        }
    }
    while(!(m<0)){
        result.push(nums[m]);
        m--;
    }
    while(n<nums.length){
        result.push(nums[n]);
        n++;
    }

    return result;
};