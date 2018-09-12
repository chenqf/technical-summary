

let isPerfectSquare = function(num) {
    let left = 1,
        right = num;
    while (left <= right){
        let mid = ~~((left + right)/2);
        let cur = mid * mid;
        if(num === cur){
            return true;
        }else if(cur > num){
            right = mid - 1;
        }else{
            left = mid + 1;
        }
    }
    return false;
};
