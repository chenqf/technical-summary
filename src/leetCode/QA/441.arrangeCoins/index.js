


let arrangeCoins = function(n) {
    if(n === 1){
        return 1
    }
    if(n === 0){
        return 0;
    }
    let left = 1,
        right = n;
    while (left < right){
        let mid = ~~((left + right)/2);
        let cur = mid * (mid + 1) / 2;
        if(cur === n){
            return mid;
        }else if(cur < n){ // 没用完
            left = mid + 1;
        }else {
            right = mid
        }
    }
    return left - 1;
};



let arrangeCoins = function (n) {
    let left = 1,
        right = n;
    if(!n) return n;
    while (left <= right){
        let mid = ~~((left + right)/2);
        let cur = mid * (mid + 1) / 2;
        if(cur === n){
            return mid;
        }else if(cur > n){
            right = mid - 1;
        }else {
            left = mid + 1;
        }
    }
    return left - 1;
};