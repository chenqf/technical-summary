

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
            right = n + 1;
        while (left < right){
            let mid = ~~((left + right)/2);
            let cur = isBadVersion(mid);
            if(cur){
                right = mid;
            }else{
                left = mid + 1;
            }
        }
        return left;
    };
};









