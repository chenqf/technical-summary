

let  mySqrt = function (x) {
    if(x === 0 || x === 1){
        return x;
    }
    let left = 1,right = x;
    while (left <= right){
        let mid = ~~((left + right)/2);
        let cur = mid * mid;
        if(cur === x){
            return mid;
        }else if(cur > x){
            right = mid - 1;
        }else{
            left = mid + 1;
        }
    }
    return left - 1;
}