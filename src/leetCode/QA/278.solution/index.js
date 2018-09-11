

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
let solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let left = 1,
            right = n;
        while (left < right - 1){
            let mid = ~~((left + right)/2),
                midValue = isBadVersion(mid);
            if(!midValue){
                left = mid;
            }else{
                right = mid;
            }
        }
        if(isBadVersion(left)){
            return left;
        }else{
            return right;
        }
    };
};