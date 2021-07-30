function isPerfectSquare(num: number): boolean {
    if(num<=0)return false;
    let low: number = 0, high: number = num;
    while(low<=high){
        let mid: number = low + ((high-low)>>1);
        if(mid*mid>num) high = mid - 1;
        else if(mid*mid<num) low = mid +1;
        else return true;
    }
    return false;
};