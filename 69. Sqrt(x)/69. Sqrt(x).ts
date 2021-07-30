function mySqrt(x: number): number {
    let low: number = 0, high: number = x;
    while(low<=high){
        let mid: number = low + ((high-low)>>1);
        if(mid*mid>x) high = mid-1;
        else if(mid*mid<x) low = mid+1;
        else return mid;
    }
    return high;
};