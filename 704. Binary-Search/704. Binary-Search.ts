function search(nums: number[], target: number): number {
    let low: number = 0, high: number = nums.length - 1;
    while(low<=high){
        let mid:number = low +((high-low)>>1);
        if(nums[mid]>target){
            high = mid-1;
        }else if(nums[mid]<target){
            low = mid+1;
        }else{
            return mid;
        }
    }
    return -1;
};