/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if(num<=0)return false;
    let low = 0, high = num;
    while(low<=high){
        let mid = low + ((high-low)>>1);
        if(mid*mid>num) high = mid - 1;
        else if(mid*mid<num) low = mid +1;
        else return true;
    }
    return false;
};