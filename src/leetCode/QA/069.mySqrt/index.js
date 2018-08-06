

let mySqrt = function(x) {
    if(x === 0){
        return 0;
    }else if(x === 1){
        return 1;
    }
    let left = 1,right = x;
    while (left < right - 1){
        let mid = ~~((left + right)/2);
        let cur = mid * mid;
        if(cur === x){
            return mid;
        }else if(cur > x){
            right = mid;
        }else if(cur < x){
            left = mid;
        }
    }
    return left;
};