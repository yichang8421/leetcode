/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let low = 0, high = x;
    while(low<=high){
        let mid = low + ((high-low)>>1);
        if(mid*mid>x) high = mid-1;
        else if(mid*mid<x) low = mid+1;
        else return mid;
    }
    return high;
};
